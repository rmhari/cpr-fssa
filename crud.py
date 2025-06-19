from sqlalchemy.orm import Session
import models, schemas

def create_cpr_entry(db: Session, entry: schemas.CPREntryCreate):
    db_entry = models.CPREntry(**entry.dict())
    db.add(db_entry)
    db.commit()
    db.refresh(db_entry)
    return db_entry

def get_cpr_entries(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.CPREntry).offset(skip).limit(limit).all()

def get_cpr_entry(db: Session, entry_id):
    return db.query(models.CPREntry).filter(models.CPREntry.id == entry_id).first()

def update_cpr_entry(db: Session, entry_id, updates: schemas.CPREntryCreate):
    db_entry = get_cpr_entry(db, entry_id)
    if db_entry:
        for key, value in updates.dict().items():
            setattr(db_entry, key, value)
        db.commit()
        db.refresh(db_entry)
    return db_entry

def delete_cpr_entry(db: Session, entry_id):
    db_entry = get_cpr_entry(db, entry_id)
    if db_entry:
        db.delete(db_entry)
        db.commit()
    return db_entry
