import { useContext } from "react";
import { Container } from "./style";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const data = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>Money</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>Money</strong>
      </div>
      <div className="total-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>Money</strong>
      </div>
    </Container>
  );
}
