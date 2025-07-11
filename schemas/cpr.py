from pydantic import BaseModel
from uuid import UUID
from datetime import datetime
from typing import Optional

from sqlalchemy.orm import relationship

# Avoid full object back-reference
student = relationship("Student", back_populates="cpr_entries", lazy="joined")


class CPREntryBase(BaseModel):
    student_name: str
    student_id: UUID
    staff_name: str
    staff_comments: Optional[str] = None
    manager_comments: Optional[str] = None
    idp: Optional[str] = None
    color_code: str

class CPREntryCreate(CPREntryBase):
    pass

class CPREntryUpdate(BaseModel):
    staff_comments: Optional[str] = None
    manager_comments: Optional[str] = None
    idp: Optional[str] = None
    color_code: Optional[str] = None

class CPREntryOut(CPREntryBase):
    id: UUID
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True
