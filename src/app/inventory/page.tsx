"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ItemForm } from "@/components/inventory/ItemForm"; // Assuming ItemForm is for adding/editing

interface Item {
  id: string;
  name: string;
  quantity: number;
  location: string;
}

export default function InventoryPage() {
  const [items, setItems] = useState<Item[]>([
    { id: "1", name: "Laptop", quantity: 10, location: "Warehouse A" },
    { id: "2", name: "Mouse", quantity: 50, location: "Warehouse B" },
    { id: "3", name: "Keyboard", quantity: 30, location: "Warehouse A" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddItem = (newItem: Omit<Item, "id">) => {
    setItems((prevItems) => [
      ...prevItems,
      { ...newItem, id: String(prevItems.length + 1) },
    ]);
    setIsFormOpen(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Gerenciamento de Itens</h1>

      <div className="flex items-center justify-between mb-4">
        <Input
          placeholder="Pesquisar itens..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogTrigger asChild>
            <Button>Adicionar Item</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Adicionar Novo Item</DialogTitle>
            </DialogHeader>
            <ItemForm
              onSubmit={handleAddItem}
              open={isFormOpen}
              onClose={() => setIsFormOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Quantidade</TableHead>
              <TableHead>Localização</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
