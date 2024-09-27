// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders Todo List header', () => {
  render(<TodoList />);
  const headerElement = screen.getByText(/Todo List/i);
  expect(headerElement).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/Add a new todo/i);
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText(/Add/i));
  const newTodo = screen.getByText(/New Todo/i);
  expect(newTodo).toBeInTheDocument();
});

test('toggles todo completion status', () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/Learn React/i);
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getByText(/Delete/i);
  fireEvent.click(deleteButton);
  const todoItem = screen.queryByText(/Learn React/i);
  expect(todoItem).not.toBeInTheDocument();
});
