import { useState } from "react"

type ListItemProps = {
    children: React.ReactNode;
    canDelete: boolean;
    onDelete: () => void;
    canEdit?: boolean;
    editControl?: React.ReactNode;
    commit?: () => void;
};

export default function ListItem({ children, canDelete, onDelete, canEdit, editControl, commit }: ListItemProps) {
    const [isEditing, setIsEditing] = useState(false);

    const handleSaveClick = () => {
        if (commit && editControl && isEditing) {
            commit();
        }

        setIsEditing(!isEditing);
    }

    return (
        <li>
            {!isEditing && children}
            {!isEditing && canDelete && <button onClick={onDelete}>Delete</button>}
            {isEditing && editControl}
            {canEdit && <button onClick={handleSaveClick}>{isEditing ? "Save" : "Edit"}</button>}
        </li>
    )
}