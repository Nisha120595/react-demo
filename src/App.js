import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './Components/Greet';
import WelcomeNisha from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Count from './Components/Count';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import NameList from './Components/NameList';
import Form from './Components/Form';
import LifeCycleA from './LifeCycle/LifeCycleA'
import FragmentDemo from './LifeCycle/FragmentDemo'
import Table from './LifeCycle/Table'
import ParentComp from './PureComponent/ParentComp'
import RefsDemo from './RefsDemo/RefsDemo'
import FocusInput from './RefsDemo/FocusInput'
import FRParentInput from './RefsDemo/FRParentInput'
import PortalDemo from './Components/PortalDemo'
import Hero from './LifeCycle/Hero'
import ErrorBoundary from './LifeCycle/ErrorBoundary'
import ClickCounter from './HigherOrderComponents/ClickCounter'
import HoverCounter from './HigherOrderComponents/HoverCounter'
import ClickCounterTwo from './RenderProps/ClickCounterTwo'
import HoverCounterTwo from './RenderProps/HoverCounterTwo'
import User from './RenderProps/User'
import Counter from './RenderProps/Counter'
import ComponentC from './ContextAPI/ComponentC'
import { UserProvider } from './ContextAPI/UserContext'
import PostList from './HTTP/PostList'
import PostForm from './HTTP/PostForm'
import UseState from './Hooks/UseState'
import UseStateWithPrevValue from './Hooks/UseStateWithPrevValue'
import UseStateWithObject from './Hooks/UseStateWithObject'
import UseStateWithArray from './Hooks/UseStateWithArray'
import {UseEffectDemo} from './Hooks/UseEffectDemo'
import UseEffectDemo2 from './Hooks/UseEffectDemo2'
import UseEffectContainer from './Hooks/UseEffectContainer'
import IntervalHookCounter from './Hooks/IntervalHookCounter'
import DataFetching from './Hooks/DataFetching'
import ComponentC2 from './Hooks/ComponentC2'
import CounterOne from './UseReducerHook/CounterOne'
import CounterTwo from './UseReducerHook/CounterTwo'
import CounterThree from './UseReducerHook/CounterThree'
import CreateContextHere from './useReducerWithUseContext/CreateContextHere'
import DataFetchingTwo from './Hooks/DataFetchingTwo'
import DataFetchingThree from './UseReducerHook/DataFetchingThree'
import UseCallbackDemo from './UseCallbackHook/UseCallbackDemo'
import UseMemoDemo from './UseMemoHook/UseMemoDemo'
import UseRefDemo from './UseRefHook/UseRefDemo'
import ClassTimer from './UseRefHook/ClassTimer'
import HookTimer from './UseRefHook/HookTimer'
import DocTitleOne from './CustomHook/DocTitleOne'
import DocTitleTwo from './CustomHook/DocTitleTwo'
import Counter1One from './CustomHook/Counter1One'
import Counter2Two from './CustomHook/Counter2Two'
import UserForm from './CustomHook/UserForm'
import Welcome from './Components/Welcome';
import Exam from './Components/Exam'


export const userContext = React.createContext()
export const channelContext = React.createContext()

class App extends Component { // Class Component
  render(){
    return( 
      <header className="App-header">
        {/* <Exam message={'hello world'} />
        <Exam message="hello world" /> */}
        {/* <UserForm /> */}
        {/* <Counter1One />
        <Counter2Two /> */}
        {/* <DocTitleOne />
        <DocTitleTwo /> */}
        {/* <ClassTimer />
        <HookTimer /> */}
        <UseRefDemo />
        {/* <UseMemoDemo /> */}
        {/* <UseCallbackDemo /> */}
        {/* <DataFetchingThree />
        <DataFetchingTwo /> */}
        {/* <CreateContextHere /> */}
        {/* <CounterThree /> */}
        {/* <CounterTwo /> */}
        {/* <CounterOne /> */}

        {/* <userContext.Provider value={{name:'Nisha'}}>
          <channelContext.Provider value={{name:'Rajput'}}>
              <ComponentC2 />
          </channelContext.Provider>
        </userContext.Provider> */}

          {/* <DataFetching /> */}
          {/* <IntervalHookCounter /> */}
          {/* <UseEffectContainer /> */}
          {/* <UseEffectDemo2 /> */}
          {/* <UseEffectDemo /> */}
          {/* <UseStateWithArray /> */}
          {/* <UseStateWithObject /> */}
          {/* <UseStateWithPrevValue /> */}
          {/* <UseState /> */}


          {/* <PostList /> */}
          {/* <PostForm /> */}


           {/* Default context value will be passed if userprovider is not present */}
           {/* <UserProvider value={{name:'Nisha'}}> 
              <ComponentC />
           </UserProvider>  */}


          {/* <Counter render={(count,clickHandler) => (
              <ClickCounterTwo count={count} clickHandler={clickHandler} />
            )}
          />
          <Counter render={(count,clickHandler) => (
              <HoverCounterTwo count={count} clickHandler={clickHandler} />
            )}
          /> */} 
                        {/* OR */}
          {/* <Counter> 
            {(count,clickHandler) => {
              return <ClickCounterTwo count={count} clickHandler={clickHandler} />
            }}
          </Counter>
          <Counter> 
            {(count,clickHandler) => (
              <HoverCounterTwo count={count} clickHandler={clickHandler} />
            )}
          </Counter> */}

          {/* <User name={(isLoggedIn) => isLoggedIn ? "Nisha" : "Guest"}/>
          {/* <ClickCounter fromWhere="App component" yes="yes"/>
          <HoverCounter react="yes"/> */}


          {/* //To hide other component because of single error */}
          {/* <ErrorBoundary>
              <Hero HeroName = "Super Man"/>
              <Hero HeroName = "Bat Man"/>
              <Hero HeroName = "Joker"/>
          </ErrorBoundary> */}

          {/* //To not hide other component because of single error */}
          {/* <ErrorBoundary>
              <Hero HeroName = "Super Man"/>
          </ErrorBoundary>
          <ErrorBoundary>
              <Hero HeroName = "Bat Man"/>
          </ErrorBoundary>
          <ErrorBoundary>
              <Hero HeroName = "Joker"/>
          </ErrorBoundary> */}
          {/* <PortalDemo /> */}


          {/* <FRParentInput /> */}
          {/* <FocusInput /> */}
          {/* <RefsDemo /> */}
          {/* <ParentComp /> */}
          {/* <Table /> */}
          {/* <FragmentDemo /> */}
          {/* <LifeCycleA /> */}
          
          
          {/* <Form /> */}
          {/* <NameList /> */}
          {/* <ParentComponent /> */}
          {/* <EventBind /> */}
          {/* <FunctionClick />
          <ClassClick /> */}
           {/* <Count /> 
          <Message /> */}
          {/* <Greet name = "Bruce" heroName = "Batman" > <h2>Child of Batman</h2> </Greet> */}
          {/* <Welcome /> */}
          {/* <Greet name = "clark" heroName = "Superman" > <h3>Child of Superman</h3> </Greet>
          <Greet name = "Tony" heroName = "Ironman" > <h4>Child of Ironman</h4> </Greet> */}
          {/* <WelcomeNisha name = "Bruce" heroName = "Batman" > <h2>Child of Batman</h2> </WelcomeNisha> */}
          {/* <WelcomeNisha name = "clark" heroName = "Superman" > <h3>Child of Superman</h3> </WelcomeNisha>
          <WelcomeNisha name = "Tony" heroName = "Ironman" > <h4>Child of Ironman</h4> </WelcomeNisha> */}
          {/* <Hello /> */}
      </header>
    );
  }
}

export default App


