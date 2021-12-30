import { useState } from "react";
import Modal from "react-modal";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./useTransactions";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

  function openModal() {
    setIsNewTransactionOpen(true);
  }
  function closeModal() {
    setIsNewTransactionOpen(false);
  }
  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={openModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionOpen}
        onRequestClose={closeModal}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}
