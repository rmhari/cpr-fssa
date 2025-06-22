from pydantic import BaseModel
from typing import Optional
from datetime import datetime
import uuid

class CPREntryBase(BaseModel):

    student_name: str
    student_id: uuid.UUID
    staff_name: str
    staff_comments: Optional[str] = None
    manager_comments: Optional[str] = None
    idp: Optional[str] = None
    color_code: str

class CPREntryCreate(CPREntryBase):
    pass

class CPREntryResponse(CPREntryBase):
    id: uuid.UUID
    created_at: datetime
    updated_at: datetime


    class Config:
        from_attributes = True
