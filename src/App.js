import { Console } from "@woowacourse/mission-utils";

class App {
    isEmptyString(input){
        return typeof input === "string" &&  input === ""
    }
  async run() {
    const input  = await Console.readLineAsync()

    try {      
      if(this.isEmptyString(input)){
        Console.print(`결과 : 0`);
        return;
      }

      
    } catch (error) {
      Console.print(`[ERROR]: ${error.message}`);
    }
  }
}




export default App;
