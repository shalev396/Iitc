import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { api } from "@/api";

interface DeleteRecipeDialogProps {
  isOpen: boolean;
  recipeId: string;
  recipeName: string;
  onClose: () => void;
  onDelete: () => void;
}

export function DeleteRecipeDialog({
  isOpen,
  recipeId,
  recipeName,
  onClose,
  onDelete,
}: DeleteRecipeDialogProps) {
  const handleDelete = async () => {
    try {
      await api.delete(`/recipe/${recipeId}`);
      onDelete();
    } catch (error) {
      console.error("Failed to delete recipe:", error);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Recipe</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete "{recipeName}"? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
} 