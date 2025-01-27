import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from '../../Config/Firebase';
import { AuthenticatedContext } from '../../Redux/AuthenticatedContext';
import { Rings } from "react-loader-spinner";
function Dashboard() {
  const { user } = useContext(AuthenticatedContext)
  const [totalAccounts, setTotalAccounts] = useState(0)
  const [totalTransactions, setTotalTransactions] = useState(0)
  const [totalCredit, setTotalCredit] = useState(0)
  const [totalDebit, setTotalDebit] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const readDocs = async () => {

    let arrayAccounts = []
    let arrayTransactions = []

    
    const accountsRef = collection(firestore, "accounts");
    const qa = query(accountsRef, where("createdBy.uid", "==", user.uid));
    const querySnapshotaccounts = await getDocs(qa); 

  

    const transactionsRef = collection(firestore, "transactions");
    const qt = query(transactionsRef, where("createdBy.uid", "==", user.uid));
    const querySnapshottransactions = await getDocs(qt);  

    querySnapshotaccounts.forEach((doc) => {

      arrayAccounts.push(doc.data())   
    });
    let credit = 0;
    let debit = 0;
    querySnapshottransactions.forEach((doc) => {
      arrayTransactions.push(doc.data())   
      if (doc.data().type === "credit") {
        credit = credit + parseInt(doc.data().amount)
        
      } else {
        debit = debit + parseInt(doc.data().amount)
        
      }
    });
    setTotalCredit(credit)
    setTotalDebit(debit)


    setTotalAccounts(arrayAccounts.length)
    setTotalTransactions(arrayTransactions.length)
    setIsLoading(false)
  }

  useEffect(() => {     
    readDocs()
  }, [])

  return (
    <div className='dashboardPage'>
      <div className='container py-5'>
        <div class="row">
          <div class="col-12  col-lg-6 mt-2">
            <div class="card pb-4">
              <div class="card-body text-center">
                <h5 class="card-title"><i class="fa-solid fa-user"></i> Accounts</h5>
                <br />
                <Link to="/dashboard/createAccounts" className='btn  mt-2 me-2 mb-0 h5' ><i class="fa-solid fa-plus"></i> Add New Account</Link>
                <Link to="/dashboard/viewAccounts" className='btn mt-2 me-2 mb-0 h5'><i class="fa-solid fa-eye"></i> View All Accounts</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
