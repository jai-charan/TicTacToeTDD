import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe("App",()=>{
  it("should not display null value",()=>{
      render(<App/>);
      const gameBoard = screen.getByTestId("gameBoard")
      expect(gameBoard).toBeInTheDocument();
      expect(gameBoard).toHaveTextContent('');
  });

  it("should render a button",()=>{
    render(<App/>);
   const gameBoard = screen.getByTestId("gameBoard")
   expect(gameBoard).toBeInTheDocument();
  });

  it("should render 9 buttons",()=>{
    render(<App/>);
    const buttons=screen.getAllByRole("button");
    expect(buttons.length).toBe(9);
  });
  it("should be able to click the button",()=>{
    render(<App/>);
    const button=screen.getAllByRole("button")[0];
    fireEvent.click(button);
    expect(button.textContent).toBe("X");
  });

  it("should render X in the square when click",()=>{
    render(<App/>);
    const button =screen.getAllByRole("button")[0];
    fireEvent.click(button);
    expect(button.textContent).toBe("X");
  });

it("should render O on the second move",()=>{
  render(<App/>);
  const button = screen.getAllByRole("button");
  fireEvent.click(button[0]);
  expect(button[0].textContent).toBe("X");
  fireEvent.click(button[1]);
  expect(button[1].textContent).toBe("O");
});

it("should display token on the square only when it is empty",()=>{
  render(<App/>);
  const square=screen.getAllByRole("button");
  fireEvent.click(square[0]);
  expect(square[0].textContent).toBe("X");
  fireEvent.click(square[0]);
  expect(square[0].textContent).toBe("X");
  
});

it("should be able to calculate winner",()=>{
  render(<App/>);
  const squares=screen.getAllByRole("button");
  const status=screen.getByTestId("status");
  fireEvent.click(squares[0]);
  fireEvent.click(squares[1]);
  fireEvent.click(squares[3]);
  fireEvent.click(squares[4]);
  fireEvent.click(squares[6]);
  fireEvent.click(squares[7]);
  expect(status.textContent).toBe("winner: X");
});

});