import React, { useState, useContext } from 'react'
import { firestore } from '../../../Config/Firebase';
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import { AuthenticatedContext } from '../../../Redux/AuthenticatedContext';



const initialState = {
  fullName: "",
  branchCode: "",
  accountNumber: "",
  accountType: "",
  initialDeposit: "",
  date: "",
  time: "",
  userId: "",
  id: "",
  description: "Initial Amount"
}
function CreateAccounts() {

  const [isLoading, setIsLoading] = useState(false);
  const { user} = useContext(AuthenticatedContext);
 const [state, setState] = useState(initialState);
  const handleChange = e => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))   
   }
  const Navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    if (state.fullName === " ") {
      toast.error('Your Name feild is empty that is not acceptable.', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (state.branchCode > 99) {
      toast.error('You can use only 99 branches.', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (state.accountNumber.length !== 9) {
      toast.error('Your Account number length should be 9', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (state.initialDeposit < 500) {
      toast.error('Your initial Deposit is less than 500 PKR. .', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    setIsLoading(true);
    state.date = dayjs().format('DD/MM/YYYY');
    state.time = dayjs().format('hh:mm:ss A');
    state.userId = user.uid;
    state.id = Math.random().toString(36).slice(2);
    let accountData = {
      ...state,
      createdBy: {
        email: user.email,
        uid: user.uid
      }
    }
try {
      console.log(accountData)
      const docRef = await setDoc(doc(firestore, "accounts", state.id), accountData);
      console.log(accountData)
      console.log(docRef)
      toast.success(`Dear ${accountData.fullName} , your Account has been Created against Account # ${accountData.accountNumber}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("data added successfuly to dataBase");
      Navigate("/dashboard/viewAccounts")
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.success(e, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
          setIsLoading(false);
          console.log(isLoading)
    }

    let { initialDeposit, description } = state
    let transactionData = {
      amount: initialDeposit,
      description,
      dateCreated: serverTimestamp(),
      id: Math.random().toString(36).slice(2),
      accountId: state.id,
      type: 'credit',
      fullName: state.fullName,
      createdBy: {
        email: user.email,
        uid: user.uid
      }
    }
    try {
      await setDoc(doc(firestore, "transactions", transactionData.id), transactionData)
      console.log("Transaction done", transactionData)
    } catch (err) {
      console.error(err)
    }
    console.log(state)
    setState(initialState);
  }

    console.log("account",state)

  return (
    <div className='container createAccount'>
      <div class="card my-5">
        <div class="card-body">
          <div className="container">
            <div className="row  ">
              <div className='col text-center'>
                <h1>Enter Account Details</h1>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row mt-2 ">
                
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" name="fullName" value={state.fullName} placeholder="name" onChange={handleChange} required />
                    <label for="floatingInput">Full Name</label>
                
                </div>
                
              </div>
              <div className="row "><div class="form-floating mb-3">
                    <input type="number" class="form-control " id="floatingInput" name="branchCode" value={state.branchCode} placeholder="1-99" onChange={handleChange} required />
                    <label for="floatingInput">Branch Code(1 - 99)</label>

                </div>
                  <div class="form-floating mb-3">
                    <input type="number" class="form-control " id="floatingInput" name='accountNumber' value={state.accountNumber} placeholder="name@example.com" onChange={handleChange} required />
                    <label for="floatingInput">Account Number(Length should be 9)</label>
  </div>
              </div>
              <div className="row ">
                <div class="form-floating mb-3">
                    <select class="form-select form-select " id="floatingInput" name="accountType" value={state.account} aria-label=".form-select-lg example" onChange={handleChange} required>
                      <option value="Saving">Saving</option>
                      <option value="Current">Current</option>
                    </select>
                    <label for="floatingInput">Choose Account type</label>
                </div>
                  <div class="form-floating mb-3">
                    <input type="number" class="form-control " id="floatingInput" name="initialDeposit" value={state.initialDeposit} placeholder="1-500" onChange={handleChange} required />
                    <label for="floatingInput">Initial Deposit(Minimum 500 Rs.)</label>

                  </div>
              </div>
              <div className="row text-end">
                <div className='col'>
                 <button type='submit' disabled={isLoading} className='btn btn-success'  >
                    {
                      !isLoading ?
                        "Create Account"
                        :
                        <div className='spinner-border spinner-border-sm'></div>
                    }
                  </button>
                 </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAccounts
