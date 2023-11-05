window.customerName = 'bob';

function upperCaseCustomerName() {
    return window.customerName = customerName.toUpperCase();
}

function setBestCustomer () {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';

}

const leastFavoriteCustomer = 'steve'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'lois';

}