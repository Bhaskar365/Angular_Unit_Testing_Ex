
// temporary pending state is achieved by pending() or xit('',()=>{})
  // xit('should add two numbers', ()=>{
        // pending()  
  // });
  // xit('should subtract two numbers', ()=>{});

import { LoggerService } from "../Logger/logger.service";
import { CalculatorService } from "./calculator.service";

describe('CalculatorService', ()=>{
  it('should add two numbers', ()=>{
    let loggerServ = new LoggerService();
    const calculator = new CalculatorService(loggerServ);
    let result = calculator.add(2,2);
    expect(result).toBe(4);
  });
  it('should subtract two numbers', ()=>{
    let loggerServ = new LoggerService();
    const calculator = new CalculatorService(loggerServ);
    let result = calculator.substract(2,2);
    expect(result).toBe(0);
  });
});
//user email and userid change commit check