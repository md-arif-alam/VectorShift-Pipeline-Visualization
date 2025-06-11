from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()

# Allow CORS for local frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str
    # other fields are ignored for now

class Edge(BaseModel):
    id: str
    source: str
    target: str
    # other fields are ignored for now

class PipelineRequest(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: PipelineRequest):
    nodes = pipeline.nodes
    edges = pipeline.edges
    num_nodes = len(nodes)
    num_edges = len(edges)

    # Build adjacency list
    adj = {node.id: [] for node in nodes}
    for edge in edges:
        adj[edge.source].append(edge.target)

    # Check for DAG using DFS
    visited = set()
    rec_stack = set()
    def is_cyclic(v):
        visited.add(v)
        rec_stack.add(v)
        for neighbor in adj.get(v, []):
            if neighbor not in visited:
                if is_cyclic(neighbor):
                    return True
            elif neighbor in rec_stack:
                return True
        rec_stack.remove(v)
        return False

    is_dag = True
    for node in adj:
        if node not in visited:
            if is_cyclic(node):
                is_dag = False
                break

    return {"num_nodes": num_nodes, "num_edges": num_edges, "is_dag": is_dag}
