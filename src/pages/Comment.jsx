import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { BsThreeDots } from 'react-icons/bs';

const Comment = () => {
  const [generatedKeys, setGeneratedKeys] = useState([]);
  const [selectedKeyIndex, setSelectedKeyIndex] = useState(null);
  const [editedDescription, setEditedDescription] = useState('');
  const [showEditPop, setShowEditPop] = useState(false);

  const toggleShowKey = (index) => {
    const updatedKeys = [...generatedKeys];
    updatedKeys[index].show = !updatedKeys[index].show;
    setGeneratedKeys(updatedKeys);
  };

  const toggleEditPop = (index) => {
    setShowEditPop(selectedKeyIndex === index ? !showEditPop : true);
    setSelectedKeyIndex(index === selectedKeyIndex ? null : index);
    setEditedDescription(''); // Reset edited description when toggling
  };

  const generateAPIKey = () => {
    const currentDate = new Date();
    const expirationDate = new Date(currentDate.getTime() + 4 * 60 * 60 * 1000);

    const newKey = {
      description: 'Admin panel',
      key: uuidv4(),
      added: currentDate.toLocaleString(),
      expires: expirationDate.toLocaleString(),
      show: false,
    };

    setGeneratedKeys([...generatedKeys, newKey]);
  };

  const editDescription = (index) => {
    const updatedKeys = [...generatedKeys];
    updatedKeys[index].description = editedDescription;
    setGeneratedKeys(updatedKeys);
    setEditedDescription(''); // Reset edited description after update
  };

  const removeAPIKey = (index) => {
    const updatedKeys = [...generatedKeys];
    updatedKeys.splice(index, 1);
    setGeneratedKeys(updatedKeys);
  };

  const handleEditDescriptionClick = (event, index) => {
    event.stopPropagation(); // Stop event propagation
    editDescription(index);
  };

  const handleRemoveAPIKeyClick = (event, index) => {
    event.stopPropagation(); // Stop event propagation
    removeAPIKey(index);
  };

  return (
    <div>
      <div className='tablegen'>
        <h3>Swyype API</h3>
        <p>You’ll need an API key to send requests on Swyype.</p>
        <button onClick={generateAPIKey}>Generate API keys</button>
      </div>
      <div className='mtable'>
      <table className='content-table'>
        <thead className='con-table'>
          <tr>
            <th>#</th>
            <th>Description</th>
            <th>Key</th>
            <th>Added</th>
            <th>Expires</th>
          </tr>
        </thead>
        <tbody>
          {generatedKeys.map((key, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{key.description}</td>
              <td>
                {key.show ? (
                  <span>
                    <FaEyeSlash onClick={() => toggleShowKey(index)} /> <p className='keys'>{key.key}</p>
                  </span>
                ) : (
                  <span>
                    <FaEye onClick={() => toggleShowKey(index)} /> Show key
                  </span>
                )}
              </td>
              <td>{key.added}</td>
              <td>{key.expires}</td>
              <td className='edit' onClick={() => toggleEditPop(index)}>
                <BsThreeDots />
                {selectedKeyIndex === index && (
                  <div className={showEditPop ? 'editpop show' : 'editpop'} onClick={(e) => e.stopPropagation()}>
                    <input
                      type='text'
                      placeholder='New description'
                      value={editedDescription}
                      onChange={(e) => setEditedDescription(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                    />
                    <div className='tablebutton'> 
                    <button class="edit-button" onClick={(e) => handleEditDescriptionClick(e, index)}>
  <svg class="edit-svgIcon" viewBox="0 0 512 512">
                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                  </svg>
</button>
                   

                    <button class="deleteButton" onClick={(e) => handleRemoveAPIKeyClick(e, index)}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 50 59"
    class="bin"
  >
    <path
      fill="#B5BAC1"
      d="M0 7.5C0 5.01472 2.01472 3 4.5 3H45.5C47.9853 3 50 5.01472 50 7.5V7.5C50 8.32843 49.3284 9 48.5 9H1.5C0.671571 9 0 8.32843 0 7.5V7.5Z"
    ></path>
    <path
      fill="#B5BAC1"
      d="M17 3C17 1.34315 18.3431 0 20 0H29.3125C30.9694 0 32.3125 1.34315 32.3125 3V3H17V3Z"
    ></path>
    <path
      fill="#B5BAC1"
      d="M2.18565 18.0974C2.08466 15.821 3.903 13.9202 6.18172 13.9202H43.8189C46.0976 13.9202 47.916 15.821 47.815 18.0975L46.1699 55.1775C46.0751 57.3155 44.314 59.0002 42.1739 59.0002H7.8268C5.68661 59.0002 3.92559 57.3155 3.83073 55.1775L2.18565 18.0974ZM18.0003 49.5402C16.6196 49.5402 15.5003 48.4209 15.5003 47.0402V24.9602C15.5003 23.5795 16.6196 22.4602 18.0003 22.4602C19.381 22.4602 20.5003 23.5795 20.5003 24.9602V47.0402C20.5003 48.4209 19.381 49.5402 18.0003 49.5402ZM29.5003 47.0402C29.5003 48.4209 30.6196 49.5402 32.0003 49.5402C33.381 49.5402 34.5003 48.4209 34.5003 47.0402V24.9602C34.5003 23.5795 33.381 22.4602 32.0003 22.4602C30.6196 22.4602 29.5003 23.5795 29.5003 24.9602V47.0402Z"
      clip-rule="evenodd"
      fill-rule="evenodd"
    ></path>
    <path fill="#B5BAC1" d="M2 13H48L47.6742 21.28H2.32031L2 13Z"></path>
  </svg>

  <span class="tooltip">Delete</span>
</button>

                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Comment;
