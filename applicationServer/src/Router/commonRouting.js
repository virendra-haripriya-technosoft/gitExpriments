const express = require('express')
router = express.Router()

//purches
const {addPurches,getPurches,updatePurches,deletePurches,deleteOnePurchase, SearchPurches}=require('../controller/purchase1')

//employee
const{addEmployee,getEmployee,deleteEmployee,updateEmployee,deleteEmployeeById,getEmployeeById, searchEmployee}=require('../controller/employee')

//customer
const{addcustomerdata,deleteCustomer,getCustomer,getCustomerById,deleteCustomerById,updateCustomer,searchCustomer}=require('../controller/customer')

//transport
const{Addtransport,getTransport,deleteTransport,getTransportById,deleteTransportById,searchTransport, updtTransport}=require('../controller/transport')

//product,
const {addProduct,getProduct,productdelete,getProductid,productdeletebyId,updateProduct,searchdata, searchProduct}=require('../controller/product')

// Admin
const{addAdmin,getAdmin,deleteAdmin,getAdminById,deleteAdminById,updateAdmindata,searchAdmin, SearchRegex}=require('../controller/admin')

//sales
const{addSales,deleteSale,getSale,getSalebyId,deleteSaletById,updateSale,searchSale, SearchSales, getInvoicePages}=require('../controller/sales')

//Expense
const{addExpense,getExpense,deleteExpense,deleteExpenseById,getExpenseById,updateExpense, textSearch, getPages}=require('../controller/expence')
const {loginWithGoogle1} = require("../controller/loginWithGoogle");
const {getRender} = require("../controller/render");
const {addStaticContentInvoice, getStaticContentInvoice, updateStaticContentInvoice,deleteStaticContentInvoice,
    getStaticDataById
} = require("../controller/staticData");
const {charBar, charBar2} = require('../controller/chartBar (1)');
const {chartBar4} = require('../controller/chartBar2 (1)');


router.get('/loginwithgoogle',loginWithGoogle1)

//purches api
router.post('/purches',addPurches)
router.get('/purches',getPurches)
router.get('/purches/:id',getPurches)
router.delete('/purches',deletePurches)
router.delete('/purches/:id',deleteOnePurchase)
router.patch('/purches/:id',updatePurches)
router.get('/purches/search/:query',SearchPurches)
//employee api
router.post('/employee',addEmployee)
router.get('/employee',getEmployee)
router.delete('/employee',deleteEmployee)
router.delete('/employee/:id',deleteEmployeeById)
router.patch('/employee/:id',updateEmployee)
router.get('/employee/:id',getEmployeeById)
router.get('/employee/search/:query',searchEmployee)
//category api
router.post('/category')

//customer api
router.post('/customer',addcustomerdata)
router.delete('/customer',deleteCustomer)
router.get('/customer',getCustomer)
router.get('/customer/:id',getCustomerById)
router.delete('/customer/:id',deleteCustomerById)
router.patch('/customer/:id',updateCustomer)
router.get('/customer/search/:query',searchCustomer)


// transport api
router.post('/transport',Addtransport)
router.get('/transport',getTransport)
router.delete('/transport',deleteTransport)
router.get('/transport/:id',getTransportById)
router.delete('/transport/:id',deleteTransportById)
router.get('/transport/search/:query',searchTransport)
router.patch('/transport/:id',updtTransport)

//product api
router.post('/product',addProduct)
router.get('/product',getProduct)
router.delete('/product',productdelete)
router.get('/product/:id',getProductid)
router.delete('/product/:id',productdeletebyId)
router.patch('/product/:id',updateProduct)
router.get('/product/search/:query',searchProduct)

//admin api
router.post('/admin',addAdmin)
router.get('/admin',getAdmin)
router.delete('/admin',deleteAdmin)
router.get('/admin/:id',getAdminById)
router.delete('/admin/:id',deleteAdminById)
router.get('/admin/search/:query',searchAdmin)
router.patch('/admin/:id',updateAdmindata)
//router.get('/regex/:query',SearchRegex)

//sales api
router.post('/sale',addSales)
router.delete('/sale',deleteSale)
router.get('/sale',getSale)
router.get('/sale/:id',getSalebyId)
router.delete('/sale/:id',deleteSaletById)
router.patch('/sale/:id',updateSale)
router.get('/sale/search/:query',SearchSales)
router.get('/pages',getInvoicePages)

//expense api
router.post('/expense',addExpense)
router.get('/expense',getExpense)
router.delete('/expense',deleteExpense)
router.delete('/expense/:id',deleteExpenseById)
router.get('/expense/:id',getExpenseById)
router.patch('/expense/:id',updateExpense)
router.get('/expense/text/:query',textSearch)
router.get('/pages/expense',getPages)


router.get('/render',getRender)

//Static Content
router.post('/static',addStaticContentInvoice)
router.get('/static',getStaticContentInvoice)
router.delete('/static',deleteStaticContentInvoice)
router.put('/static/:id',updateStaticContentInvoice)
router.get('/static/:id',getStaticDataById)



//chart routes
router.get('/chart1',charBar)
router.get('/chart2',charBar2)
router.get('/chart3',chartBar4)

module.exports=router
