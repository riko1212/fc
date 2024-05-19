import { useState } from 'react';
import PropTypes from 'prop-types'

Form.propTypes = {
  onAddSum: PropTypes.func,
  onAddItems: PropTypes.func,
}

export default function Form({ onAddSum, onAddItems }) {
  const [income, setIncome] = useState('');
  const [topic, setTopic] = useState('');
  const [date, setDate] = useState(Date.now());

  function handleSubmit(e) {
    e.preventDefault();

    if (!income || !topic) return;

    const result = { income, topic, date, id: Date.now() };

    onAddSum(result.income);
    onAddItems(result);

    setIncome('');
    setTopic('');
    setDate(Date.now());
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-wrap">
        <input
          type="text"
          name="user-text"
          className="form-input"
          placeholder="Enter type"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <input
          type="number"
          name="user-sum"
          className="form-input"
          placeholder="Enter sum"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
        <input
          type="text"
          name="user-date"
          className="form-input"
          placeholder="Enter date"
          value={new Date(date).toLocaleDateString('uk-UA')}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button type="submit" className="form-btn btn">
        Save
      </button>
    </form>
  );
}
