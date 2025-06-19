from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import crud, schemas

from database import SessionLocal

router = APIRouter(prefix="/cpr", tags=["CPR"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=schemas.CPREntryResponse)
def create_cpr(entry: schemas.CPREntryCreate, db: Session = Depends(get_db)):
    return crud.create_cpr_entry(db, entry)

@router.get("/", response_model=list[schemas.CPREntryResponse])
def read_cpr(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return crud.get_cpr_entries(db, skip, limit)

@router.get("/{entry_id}", response_model=schemas.CPREntryResponse)
def read_cpr_entry(entry_id: str, db: Session = Depends(get_db)):
    db_entry = crud.get_cpr_entry(db, entry_id)
    if db_entry is None:
        raise HTTPException(status_code=404, detail="Entry not found")
    return db_entry

@router.put("/{entry_id}", response_model=schemas.CPREntryResponse)
def update_cpr(entry_id: str, updates: schemas.CPREntryCreate, db: Session = Depends(get_db)):
    return crud.update_cpr_entry(db, entry_id, updates)

@router.delete("/{entry_id}")
def delete_cpr(entry_id: str, db: Session = Depends(get_db)):
    return crud.delete_cpr_entry(db, entry_id)
