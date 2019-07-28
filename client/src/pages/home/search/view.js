import React from 'react';

export default ({ items, onChange }) => (
    <div>
        <select onChange={e => {
            onChange(items.find(tag => tag.title === e.target.value ))
        }}>
            <option></option>
            {items.map(({ id, title }) => (
                <option key={id}>{title}</option>
            ))}
        </select>
    </div>
)
