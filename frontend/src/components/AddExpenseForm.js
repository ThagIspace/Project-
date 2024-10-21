import React from "react";
import { useFetcher } from "react-router-dom";
import { useRef, useEffect } from "react";

const AddExpenseForm = ({ budgets }) => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);
  return (
    <div className="form-wrapper">
      <h2 className="h3">
        Thêm khoản chi mới cho ngân sách{" "}
        <span className="accent">
          {budgets.length === 1 && `${budgets.map((budg) => budg.name)}`}
        </span>
      </h2>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="expense-inputs">
          <div className="grid-xs">
            <label htmlFor="newExpense">Tên chi phí</label>
            <input
              type="text"
              id="newExpense"
              name="newExpense"
              placeholder="Groceries, Gas, Rent..."
              required
              ref={focusRef}
            />
          </div>
          <div className="grid-xs">
            <label htmlFor="newExpenseAmount">Giá</label>
            <input
              type="number"
              step="0.01"
              id="newExpenseAmount"
              name="newExpenseAmount"
              placeholder="500.000, 1.000.000, 2.000.000... vnđ"
              required
              inputMode="decimal"
            />
          </div>
        </div>
        <div className="grid-xs" hidden={budgets.length === 1}>
          <label htmlFor="newExpenseBudget">Ngân sách</label>
          <select id="newExpenseBudget" name="newExpenseBudget" required>
            {budgets.map((budget) => (
              <option key={budget.id} value={budget.id}>
                {budget.name}
              </option>
            ))}
          </select>
        </div>
        <input type="hidden" name="_action" value="createExpense" />
        <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
          {isSubmitting ? (
            <span>Submitting…</span>
          ) : (
            <>
              <span>Thêm khoản chi</span>
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
};

export default AddExpenseForm;
