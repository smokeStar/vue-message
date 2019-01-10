import alert   from '../components/alert.vue';
import toast   from '../components/toast.vue';
import confirm from '../components/confirm.vue';
import loading from '../components/loading.vue';

let $loading, $toast, $alert, $confirm;
let lTimer, tTimer;

function install (Vue, opt) {

    if(!$loading){
        const Loading = Vue.extend(loading);

        $loading = new Loading({
            el : document.createElement('div')
        });

        document.body.appendChild($loading.$el);
    }

    if(!$toast){
        const Toast = Vue.extend(toast);

        $toast = new Toast({
            el : document.createElement('div')
        });

        document.body.appendChild($toast.$el);
    }

    if(!$alert){
        const Alert = Vue.extend(alert);

        $alert = new Alert({
            el : document.createElement('div')
        });

        document.body.appendChild($alert.$el);
    }

    if(!$confirm){
        const Confirm = Vue.extend(confirm);

        $confirm = new Confirm({
            el : document.createElement('div')
        });

        document.body.appendChild($confirm.$el);
    }

    $loading.show = false;
    $toast.show   = false;
    $alert.show   = false;
    $confirm.show = false;

    let showLoading = function (){
        // 需要考虑重复调用的问题,保持最后一个loading
        // if($loading.show) return;

        $loading.show = true;
        if(lTimer) clearTimeout(lTimer);

        lTimer = setTimeout(() => {
            $loading.show = false;
        },1500)
    }

    let showToast = function (text) {

        $toast.show = true;
        $toast.text = text;
        if(tTimer) clearTimeout(tTimer);

        tTimer = setTimeout(() => {
            $toast.show = false;
        },1500)
    }

    let showAlert = function (content) {

        $alert.show = true;
        $alert.content = content;
    }

    // this.$confirm(content,{sure : '确定', cancel : '取消'});
    let showConfirm = function (content=''){
        $confirm.show = true;
        $confirm.content = content;

        return new Promise((resolve, reject) =>{

            $confirm.$refs.confirm.addEventListener('click', (e) => {
                resolve($confirm.show = false);
            })
            $confirm.$refs.cancel.addEventListener('click', (e) => {
                reject($confirm.show = false);
            })
        })

    }


   window.$loading = Vue.prototype.$loading = showLoading;
   window.$toast   = Vue.prototype.$toast   = showToast;
   window.$alert   = Vue.prototype.$alert   = showAlert;
   window.$confirm = Vue.prototype.$confirm = showConfirm;

}


if(typeof window !== 'undefined' && window.Vue){
    window.Vue.use(install);

    if (install.installed) {
        install.installed = false;
    }
}

export default install;
