import { createContext, useState, useEffect, ReactNode } from "react";
import { api } from "./services/api";

export const TransactionsContext = createContext<Transaction[]>([]);

interface Transaction {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((res) => setTransactions(res.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}
