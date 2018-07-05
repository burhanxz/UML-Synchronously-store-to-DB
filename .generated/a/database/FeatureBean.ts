/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace a.database {
    export class FeatureBean {
        /*private*/ ID : string;

        /*private*/ featureName : string;

        public getID() : string {
            return this.ID;
        }

        public setID(iD : string) {
            this.ID = iD;
        }

        public getFeatureName() : string {
            return this.featureName;
        }

        public setFeatureName(featureName : string) {
            this.featureName = featureName;
        }

        /**
         * 
         * @return {string}
         */
        public toString() : string {
            return "ID=" + this.ID + ", featureName=" + this.featureName;
        }

        constructor() {
            this.ID = null;
            this.featureName = null;
        }
    }
    FeatureBean["__class"] = "a.database.FeatureBean";
    FeatureBean["__interfaces"] = ["java.io.Serializable"];


}

