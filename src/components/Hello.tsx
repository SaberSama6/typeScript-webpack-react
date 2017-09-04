import * as React from 'react';
import style from './Hello.css';

 interface Props {
    name:string;
    enthusiasmLevel?: number
    onIncrement?: () => void;
    onDecrement?: () => void;
  }
function  getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}
class Hello extends React.Component<Props, object> {    // Props和object必须传，一个代表props一个代表state
    render() {
      const { name, enthusiasmLevel = 1,onDecrement,onIncrement} = this.props;
  
      if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
      }
      return (
        <div className={style.hello}>
          <div className="greeting">
            Hello {name + getExclamationMarks(enthusiasmLevel)}
          </div>
          <div>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
          </div>
        </div>
      );
    }
  }

export default Hello as any;
//这里默认导出 Hello 的话，在containers/Hello.tsx中会出现
/*
error TS2345: Argument of type 'typeof Hello' is not assignable to parameter of type 'ComponentType<{ enthusiasmLevel: number; name: string; } & { onIncrement: () => IncrementEnthusia...'.
Type 'typeof Hello' is not assignable to type 'StatelessComponent<{ enthusiasmLevel: number; name: string; } & { onIncrement: () => IncrementEnt...'.
Type 'typeof Hello' provides no match for the signature '(props: { enthusiasmLevel: number; name: string; } & { onIncrement: () => IncrementEnthusiasm; onDecrement: () => DecrementEnthusiasm; } &{ children?: ReactNode; }, context?: any): ReactElement<any>'.
的错误  强推类型不符合导致的， 在Hello后加一个 as any可解决
*/