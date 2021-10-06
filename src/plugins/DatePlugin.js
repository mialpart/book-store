import moment from "moment";

//Just some simple date formatters
export default {
    install: (Vue) => {

        Vue.prototype.$dateFormat = (value) => {
            return moment(value).format();
        };

        Vue.prototype.$dateMonthYear = (value) => {
            return moment(value).format('DD.MM.YYYY');
        };
    }
}