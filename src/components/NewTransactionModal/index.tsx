import { useState, FormEvent, useContext } from "react";
import Modal from "react-modal";
import { Container, RadioButton, TransactionTypeContainer } from "./style";
import "../../styles/global";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { api } from "../../services/api";
import { TransactionsContext } from "../../TransactionsContext";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  const transactions = useContext(TransactionsContext);

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault();
    const data = {
      title,
      value,
      category,
      type,
    };
    api
      .post("/transactions", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="button-close-modal"
      >
        <img src={closeImg} alt="Feachar Modal"></img>
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        ></input>
        <TransactionTypeContainer>
          <RadioButton
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada"></img>
            <span>Entrada</span>
          </RadioButton>
          <RadioButton
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída"></img>
            <span>Saída</span>
          </RadioButton>
        </TransactionTypeContainer>
        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        ></input>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
