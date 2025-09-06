from fastapi import APIRouter, Query
from app.utils.ai_client import semantic_search

router = APIRouter()

# In-memory docs for MVP
DOC_STORE = [
    "AI enables new ways of document summarization.",
    "Akash Network provides decentralized compute.",
    "Meta-Llama is a powerful open source LLM."
]

@router.get("/search")
async def search(q: str = Query(...)):
    matches = semantic_search(q, DOC_STORE)
    return {"results": matches}
