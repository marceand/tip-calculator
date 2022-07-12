import styled from "styled-components";

const TipCalculator = () => {
  return (
    <Wrapper>
      <FinalAmount>
        <h3>21.90</h3>
        <p>
          20% <span>Tip</span>
        </p>
      </FinalAmount>
      <Form>
        <form>
          <label>TOTAL</label>
          <input type="number" placeholder="$10.55" />
        </form>
      </Form>
      <ChooseTip>
        <p>Choose Tip</p>
        <button>10%</button>
        <button>15%</button>
        <button>20%</button>
      </ChooseTip>
    </Wrapper>
  );
};

export default TipCalculator;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 10px auto auto;
  background: #f9fdfe;
  box-shadow: 0px 5px 30px rgb(0, 0, 0, 0.2);
  border-radius: 1rem;
`;

const FinalAmount = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #25d9a5;
  text-align: center;
  height: 30vh;
  h3 {
    color: #f9fdfe;
    font-size: 2.8rem;
  }
  p {
    font-size: 1.4rem;
    color: #f9fdfe;
    margin-top: 1.2rem;
  }
  span {
    color: #d3e6f0;
  }
`;

const Form = styled.div`
  padding: 1.2rem;
  color: #939ba0;
  label {
    font-size: 1rem;
  }
  input {
    margin-top: 0.4rem;
    padding: 0.4rem;
    font-size: 1.6rem;
    width: 100%;
    text-align: right;
  }
`;

const ChooseTip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  p {
    font-weight: bold;
    font-size: 1.4rem;
    color: #939ba0;
  }
  button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    border-radius: 10px;
    background: transparent;
    color: #25d9a5;
    margin: 0.4rem;
    width: 70%;
    &:hover {
      background: #25d9a5;
      color: white;
    }
  }
`;
