import Vue from 'vue'
import { Button} from 'mint-ui'
export function requireComponents(){
	Vue.component(Button.name, Button);
}

