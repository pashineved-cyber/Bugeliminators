from fastapi import APIRouter, Query
from app.utils.vector_store import search_documents

router = APIRouter()

@router.get("/search")
async def search(q: str = Query(...)):
    matches = search_documents(q, top_k=3)
    return {"results": matches}
