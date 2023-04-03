import React from 'react'
import PropTypes from 'prop-types'

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    if (!Array.isArray(items)) {
        return (
            <ul className="list-group">
                {Object.keys(items).map((item) => (
                    <li
                        key={items[item][valueProperty]}
                        className={
                            'list-group-item' +
                            (items[item] === selectedItem ? ' active' : '')
                        }
                        onClick={() => onItemSelect(items[item])}
                        role="button"
                    >
                        {items[item][contentProperty]}
                    </li>
                ))}
            </ul>
        )
    }
    return (
        <ul className="list-group">
            {items.map((item) => (
                <li
                    className={
                        'list-group-item' +
                        (item === selectedItem ? ' active' : '')
                    }
                    onClick={() => onItemSelect(item)}
                    key={item._id}
                    role="button"
                >
                    {item[contentProperty]}
                </li>
            ))}
        </ul>
    )
}

GroupList.defaultProps = {
    valueProperty: '_id',
    contentProperty: 'name'
}
GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onItemSelect: PropTypes.func,
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    selectedItem: PropTypes.object
}

export default GroupList
