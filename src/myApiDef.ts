import "reflect-metadata"
import { apiDef, apiHost } from "@codiac.io/codiac-api-base";
export {Buffer} from "buffer";

export class myApiDef extends apiDef {

    /**
     *
     */
    constructor() {
        super();

    }

    defineEndpoints(host: apiHost): void {
      // ----TEMP--------------------
      let openApi = this.endpoints.find(e => e.operationId == "openApi");
      if (openApi) openApi.isDmz = true;
      // ----TEMP--------------------


    }

    Bootstrap(host: apiHost): void {
       
    }
}