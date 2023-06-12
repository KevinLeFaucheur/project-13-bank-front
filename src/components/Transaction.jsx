import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { dateFormat } from '../utils/dateFormat';

import { 
  Button, DetailRow, Input, Notes, 
  Select, TableRow, TableRowResponsive, 
  TransactionDetails, TransactionWrapper 
} from './Transaction.styled';
import { GlobalIcon as Icon } from '../styles/GlobalStyle'
import { TableItem } from './TableHeader';

export const Transaction = ({ transaction }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelectVisible, setSelectVisibility] = useState('collapse');
  const [isNotesVisible, setNotesVisibility] = useState('collapse');

  const [selectValue, setSelectValue] = useState('');
  const [noteInputValue, setNoteInputValue] = useState('');
  const noteInputRef = useRef('');

  /** Holds Select value in local and state, then closes collapse */
  const handleSetSelectValue = (value) => {
    localStorage.setItem(`category-${transaction?.id}`, value); // Set to database once API is ready
    setSelectValue(value);
    setSelectVisibility('collapse');
  }

  /** Holds Notes value in local and state, then closes collapse */
  const handleSetNotesValue = (value) => {
    localStorage.setItem(`note-${transaction?.id}`, value); // Set to database once API is ready
    setNoteInputValue(value);
    setNotesVisibility('collapse');
  }

  const categories = ["Food", "Animals", "Energy", "Car"];
  const [month, day, year] = dateFormat(transaction?.date);

  return (
    <TransactionWrapper>
      <Icon className={`collapse--icon fa fa-solid ${isOpen ? 'fa-angle-down' : 'fa-angle-up'}`}></Icon>
      <div>
        <TableRow onClick={() => setIsOpen(!isOpen)}>
          <TableItem colWidth='15%'>{month + ' ' + day + ', ' + year}</TableItem>
          <TableItem colWidth='35%'>{transaction?.description}</TableItem>
          <TableItem colWidth='25%'>${transaction?.amount}</TableItem>
          <TableItem colWidth='25%'>${transaction?.balance}</TableItem>
        </TableRow>

        <TableRowResponsive onClick={() => setIsOpen(!isOpen)}>
          <div className='upper'>
            <div>{transaction?.description}</div>
            <div>${transaction?.amount}</div>
          </div>
          <div className='lower'>
            <div>{month + ' ' + day + ', ' + year}</div>
            <div>${transaction?.balance}</div>
          </div>
        </TableRowResponsive>

        {isOpen ?
          <TransactionDetails>

          <DetailRow>Transaction Type: {transaction?.infos?.transactionType}</DetailRow>

          <DetailRow>Category:&nbsp;
            {selectValue}
            <Icon onClick={() => setSelectVisibility(isSelectVisible === 'visible' ? 'collapse' : 'visible')} className="pen--icon fa fa-solid fa-pencil" />
            <Select visibility={isSelectVisible} onChange={(e) => handleSetSelectValue(e.target.value)} name="categories">
              <option value="">--Please choose a category--</option>
              {categories.map(category => <option key={category} value={category}>{category}</option>)}
            </Select>
          </DetailRow>
          
          <DetailRow>Notes:&nbsp;
            {noteInputValue}
            <Icon onClick={() => setNotesVisibility(isNotesVisible === 'visible' ? 'collapse' : 'visible')} className="pen--icon fa fa-solid fa-pencil" />
            <Notes visibility={isNotesVisible}>
              <Input id={`transaction-note-${transaction.id}`} ref={noteInputRef} placeholder='Write a note' />
              <Button onClick={() => handleSetNotesValue(noteInputRef.current.value)}><span>Save</span><i className="fa fa-solid fa-check" /></Button>
              <Button onClick={() => setNotesVisibility('collapse')}><span>Cancel</span><i className="fa fa-solid fa-xmark" /></Button>
           </Notes>
          </DetailRow>

        </TransactionDetails> : ''}
      </div>
    </TransactionWrapper>
  )
};

Transaction.propTypes = {

  transaction: PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.string,
    description: PropTypes.string,
    amount: PropTypes.number,
    balance: PropTypes.number,

    infos: PropTypes.shape({
      transactionType: PropTypes.string,
      category: PropTypes.string,
      notes: PropTypes.string,
    })
  })
}