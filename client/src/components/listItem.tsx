import { useState } from "react"

type ListItemProps = {
    children: React.ReactNode;
    canDelete: boolean;
    onDelete: () => void;
    canEdit?: boolean;
    editControl?: React.ReactNode;
};

export default function ListItem({ children, canDelete, onDelete, canEdit, editControl }: ListItemProps) {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <li>
            {!isEditing && children}
            {!isEditing && canDelete && <button onClick={onDelete}>Delete</button>}
            {isEditing && editControl}
            {canEdit && <button onClick={() => setIsEditing(!isEditing)}>{isEditing ? "Save" : "Edit"}</button>}
        </li>
    )
}