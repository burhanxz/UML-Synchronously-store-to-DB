/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace a.database {
    export class ClassBean {
        /*private*/ nsUri : string;

        /*private*/ className : string;

        public getNsUri() : string {
            return this.nsUri;
        }

        public setNsUri(nsUri : string) {
            this.nsUri = nsUri;
        }

        public getClassName() : string {
            return this.className;
        }

        public setClassName(className : string) {
            this.className = className;
        }

        /**
         * 
         * @return {string}
         */
        public toString() : string {
            return "nsUri=" + this.nsUri + ", className=" + this.className;
        }

        constructor() {
            this.nsUri = null;
            this.className = null;
        }
    }
    ClassBean["__class"] = "a.database.ClassBean";

}

