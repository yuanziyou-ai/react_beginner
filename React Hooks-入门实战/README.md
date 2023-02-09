# 这里带大家学习一下React Hooks的语法知识，通过一些小案例来实战学习

Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

Hook产生原因：
1 在组件之间复用状态逻辑很难
2 复杂组件变得难以理解
3 难以理解的 class

Hook 为已知的 React 概念提供了更直接的 API：props， state，context，refs 以及生命周期。

# 介绍
# 基础的 Hook
UseState  简单的说就是跟踪修改函数状态。
通过在函数组件里调用它来给组件添加一些内部 state。返回一个 state，以及更新 state 的函数。

UseEffect  给函数组件增加了操作副作用的能力。
它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API。

UseContext 是一个管理全局状态的方式。主要用于组件间共享状态。
它接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。

# 进阶的 Hook

UseRef 允许我们在渲染页面之间保留数值。
它可用于存储可变值，该值在更新时不会导致重新呈现。它可用于直接访问 DOM 元素。

UseReducer 类似于useState 它允许我们自定义状态逻辑。
通常用于跟踪复杂逻辑的多个状态。
它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法。

UseCallback 可以返回一个记忆的回调函数，并且将其作为缓存值，不需要重新计算它。
一个好处是防止组件重新渲染，提高性能

UseMemo 和UseCallback相似，UseCallback返回一个记忆的回调函数。
UseMemo返回一个记忆的值。
大概作用都是提高性能，避免重复执行一些复杂的计算。


Custom Hooks
Hooks 可以自定义。
如果你有需要在多个组件中重用的有状态逻辑，则可以构建自己的自定义 Hook。


# Hook 使用规则
Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则：
1 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
2 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。
