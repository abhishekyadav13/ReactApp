import React,{useState,useReducer,useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet"
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import ClassCounter from './componentsHook/ClassCounter';
import HookCounter from './componentsHook/HookCounter';
import HookCounterTwo from './componentsHook/HookCounterTwo';
import HookCounterThree from './componentsHook/HookCounterThree';
import HookCounterFour from './componentsHook/HookCounterFour';
import UseEffectOnee from './componentsHook/UseEffectOnee';
import HookMouse from './componentsHook/HookMouse';
import MouseContainer from './componentsHook/MouseContainer';
import IntervalHookCounter from './componentsHook/IntervalHookCounter';
import DataFetching from './componentsHook/DataFetching';
import ComponentsC from './componentsHook/ComponentsC';
import CounterHookOne from './componentsHook/CounterHookOne';
import CounterHookTwo from './componentsHook/CounterHookTwo';
import CounterHookThree from './componentsHook/CounterHookThree';
import ComponentX from './componentsHook/ComponentX';
import ComponentY from './componentsHook/ComponentY';
import ComponentZ from './componentsHook/ComponentZ';
import DataFetchingOne from './componentsHook/DataFetchingOne';
import DataFetchingTwo from './componentsHook/DataFetchingTwo';
import ParentsComponent from './componentsHookTwo/ParentsComponent';
import UseMemoCounter from './componentsHookTwo/UseMemoCounter';
import UseRefFocusInput from './componentsHookTwo/UseRefFocusInput';
import HookTimer from './componentsHookTwo/HookTimer';
import DocsTitleOne from './componentsHookTwo/DocsTitleOne';
import DocsTitleTwo from './componentsHookTwo/DocsTitleTwo';
import CustomCounterOne from './componentsHookTwo/CustomCounterOne';
import CustomCounterTwo from './componentsHookTwo/CustomCounterTwo';
import UserForm from './componentsHookTwo/UserForm';
import StateImmutability from './ReactRendering/StateImmutability';
import Parents from './ReactRendering/Parents';




// export const UserContext=React.createContext()
// export const ChannelContext=React.createContext()

// export const CountContext=React.createContext()
// const initialState=0
// const reducer=(state,action)=>{
//      switch(action){
//         case 'increment':
//             return state+1
//         case 'decrement':
//             return state-1
//         case 'reset':
//             return initialState
//         default:
//             return state            
//      }
// }

function App() {
  // const [count,dispatch]= useReducer(reducer,initialState)
  return (
    <div className="App">
      {/* <Greet name="abhi" place="ahmd">
        <p>this is children</p>
        <p>this is this</p>
      </Greet> */}
      {/* <Greet name="mai" place="pata nhi"/> */}
      {/* <Welcome name="abhi" place="ahmd">
      <p>this is children</p>
        <p>this is this</p>
      </Welcome> */}
      {/* <Welcome name="mai" place="pata nhi"/> */}

      {/* <Message/> */}
      {/* <Counter/> */}

      {/* <FunctionClick/>
      <ClassClick/> */}

      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      {/* <NameList/> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <Inline/>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}

      {/* <Form/> */}
      {/* <LifecycleA/> */}
      {/* <FragmentDemo/> */}
      {/* <Table/> */}
      {/* <ParentComp/> */}
      {/* <RefsDemo/> */}
      {/* <FocusInput/> */}
      {/* <FRParentInput/> */}
      {/* <PortalDemo/> */}

      {/* <ErrorBoundary>
      <Hero heroname="Batman"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroname="Superman"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroname="joker"/>
       </ErrorBoundary> */}

       {/* <ClickCounter name="abhi"/>
       <HoverCounter/> */}

       {/* <ClickCounterTwo/>
       <HoverCounterTwo/>
       <User render={(isLoggedIn)=>isLoggedIn?"Abhi":"Guest"}/> */}

        {/* <CounterTwo
        render={(count,incrementCount)=>(
          <ClickCounterTwo count={count} incrementCount={incrementCount}/>
        )}
       />
       <CounterTwo
        render={(count,incrementCount)=>(
          <HoverCounterTwo count={count} incrementCount={incrementCount}/>
        )}
       />  */}

       {/* <UserProvider value="abhi">
           <ComponentC/>
       </UserProvider> */}
          
         {/* <PostList/>  */}
         {/* <PostForm/> */}



         {/* Hooks */}

         <ClassCounter/> 
          <HookCounterTwo/> 
          <HookCounter/> 
          <HookCounterThree/>
         <HookCounterFour/>

        {/* <UseEffectOnee/> */}
        {/* <HookMouse/> */}
        {/* <MouseContainer/> */}
        {/* <IntervalHookCounter/> */}
        {/* <DataFetching/> */}

         {/* <UserContext.Provider value={'abhi'}>
           <ChannelContext.Provider value={'nothing'}>
            <ComponentsC/>
           </ChannelContext.Provider>
         </UserContext.Provider> */}

         {/* <CounterHookOne/> */}
         {/* <CounterHookTwo/> */}
         {/* <CounterHookThree/> */}

         {/* <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
          Count --  {count}
            <ComponentX/>
            <ComponentY/>
            <ComponentZ/>
         </CountContext.Provider>
          */}

          {/* <DataFetchingOne/> */}
          {/* <DataFetchingTwo/> */}

          {/* useCallback hook is used to increase performance, using React.memo in 
          component each and every component do not render on change but the 
          Button component re-renders so use the useCallback to optimize it  */}

          {/* <ParentsComponent/> */}

          {/* If you need to cache function use useCallback and if you need to cache
          the result then use useMemo  */}

          {/* <UseMemoCounter/> */}

          {/* <UseRefFocusInput/> */}
          {/* <HookTimer/> */}
          {/* <DocsTitleOne/>
          <DocsTitleTwo/> */}

          {/* <CustomCounterOne/>
          <CustomCounterTwo/> */}

          {/* <UserForm/> */}

          {/* <StateImmutability/> */}
          {/* <Parents/> */}
          
      
    </div>
  );
}

export default App;
