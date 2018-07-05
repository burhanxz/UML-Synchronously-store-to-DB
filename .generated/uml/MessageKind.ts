/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the literals of the enumeration '<em><b>Message Kind</b></em>',
     * and utility methods for working with them.
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * This is an enumerated type that identifies the type of Message.
     * <p>From package UML::Interactions.</p>
     * <!-- end-model-doc -->
     * @see uml.UmlPackage#getMessageKind()
     * @model
     * @generated
     * @enum
     * @property {uml.MessageKind} COMPLETE
     * The '<em><b>Complete</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #COMPLETE_VALUE
     * @generated
     * @ordered
     * @property {uml.MessageKind} LOST
     * The '<em><b>Lost</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #LOST_VALUE
     * @generated
     * @ordered
     * @property {uml.MessageKind} FOUND
     * The '<em><b>Found</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #FOUND_VALUE
     * @generated
     * @ordered
     * @property {uml.MessageKind} UNKNOWN
     * The '<em><b>Unknown</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #UNKNOWN_VALUE
     * @generated
     * @ordered
     * @property {number} COMPLETE_VALUE
     * The '<em><b>Complete</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * sendEvent and receiveEvent are present
     * <!-- end-model-doc -->
     * @see #COMPLETE
     * @model name="complete"
     * @generated
     * @ordered
     * @property {number} LOST_VALUE
     * The '<em><b>Lost</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * sendEvent present and receiveEvent absent
     * <!-- end-model-doc -->
     * @see #LOST
     * @model name="lost"
     * @generated
     * @ordered
     * @property {number} FOUND_VALUE
     * The '<em><b>Found</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * sendEvent absent and receiveEvent present
     * <!-- end-model-doc -->
     * @see #FOUND
     * @model name="found"
     * @generated
     * @ordered
     * @property {number} UNKNOWN_VALUE
     * The '<em><b>Unknown</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * sendEvent and receiveEvent absent (should not appear)
     * <!-- end-model-doc -->
     * @see #UNKNOWN
     * @model name="unknown"
     * @generated
     * @ordered
     * @property {uml.MessageKind[]} VALUES
     * A public read-only list of all the '<em><b>Message Kind</b></em>' enumerators.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     */
    export enum MessageKind {
        
        /**
         * The '<em><b>Complete</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #COMPLETE_VALUE
         * @generated
         * @ordered
         */
        COMPLETE, 
        /**
         * The '<em><b>Lost</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #LOST_VALUE
         * @generated
         * @ordered
         */
        LOST, 
        /**
         * The '<em><b>Found</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #FOUND_VALUE
         * @generated
         * @ordered
         */
        FOUND, 
        /**
         * The '<em><b>Unknown</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #UNKNOWN_VALUE
         * @generated
         * @ordered
         */
        UNKNOWN
    }

    /** @ignore */
    export class MessageKind_$WRAPPER implements org.eclipse.emf.common.util.Enumerator {
        /**
         * The '<em><b>Complete</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * sendEvent and receiveEvent are present
         * <!-- end-model-doc -->
         * @see #COMPLETE
         * @model name="complete"
         * @generated
         * @ordered
         */
        public static COMPLETE_VALUE = 0;

        /**
         * The '<em><b>Lost</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * sendEvent present and receiveEvent absent
         * <!-- end-model-doc -->
         * @see #LOST
         * @model name="lost"
         * @generated
         * @ordered
         */
        public static LOST_VALUE = 1;

        /**
         * The '<em><b>Found</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * sendEvent absent and receiveEvent present
         * <!-- end-model-doc -->
         * @see #FOUND
         * @model name="found"
         * @generated
         * @ordered
         */
        public static FOUND_VALUE = 2;

        /**
         * The '<em><b>Unknown</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * sendEvent and receiveEvent absent (should not appear)
         * <!-- end-model-doc -->
         * @see #UNKNOWN
         * @model name="unknown"
         * @generated
         * @ordered
         */
        public static UNKNOWN_VALUE = 3;

        /**
         * An array of all the '<em><b>Message Kind</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static VALUES_ARRAY; public static VALUES_ARRAY_$LI$() : MessageKind[] { if(MessageKind_$WRAPPER.VALUES_ARRAY == null) MessageKind_$WRAPPER.VALUES_ARRAY = [MessageKind.COMPLETE, MessageKind.LOST, MessageKind.FOUND, MessageKind.UNKNOWN]; return MessageKind_$WRAPPER.VALUES_ARRAY; };

        /**
         * A public read-only list of all the '<em><b>Message Kind</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public static VALUES; public static VALUES_$LI$() : Array<MessageKind> { if(MessageKind_$WRAPPER.VALUES == null) MessageKind_$WRAPPER.VALUES = /* unmodifiableList *//* asList */MessageKind_$WRAPPER.VALUES_ARRAY_$LI$().slice(0).slice(0); return MessageKind_$WRAPPER.VALUES; };

        public static get$java_lang_String(literal) : MessageKind {
            for(let i = 0; i < MessageKind_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = MessageKind_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(uml.MessageKind["_$wrappers"][result].toString(),literal))) {
                    return result;
                }
            };
            return null;
        }

        /**
         * Returns the '<em><b>Message Kind</b></em>' literal with the specified literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} literal the literal.
         * @return {uml.MessageKind} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static get(literal?) : any {
            if(((typeof literal === 'string') || literal === null)) {
                return <any>uml.MessageKind_$WRAPPER.get$java_lang_String(literal);
            } else if(((typeof literal === 'number') || literal === null)) {
                return <any>uml.MessageKind_$WRAPPER.get$int(literal);
            } else throw new Error('invalid overload');
        }

        /**
         * Returns the '<em><b>Message Kind</b></em>' literal with the specified name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} name the name.
         * @return {uml.MessageKind} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static getByName(name) : MessageKind {
            for(let i = 0; i < MessageKind_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = MessageKind_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(uml.MessageKind["_$wrappers"][result].getName(),name))) {
                    return result;
                }
            };
            return null;
        }

        public static get$int(value) : MessageKind {
            switch((value)) {
            case 0 /* COMPLETE_VALUE */:
                return MessageKind.COMPLETE;
            case 1 /* LOST_VALUE */:
                return MessageKind.LOST;
            case 2 /* FOUND_VALUE */:
                return MessageKind.FOUND;
            case 3 /* UNKNOWN_VALUE */:
                return MessageKind.UNKNOWN;
            }
            return null;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ value;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ __name;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ literal;

        constructor(protected _$ordinal : number, protected _$name : string, value, name, literal) {
            this.value = 0;
            this.__name = null;
            this.literal = null;
            this.value = value;
            this.__name = name;
            this.literal = literal;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {number}
         */
        public getValue() : number {
            return this.value;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {string}
         */
        public getName() : string {
            return this.__name;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {string}
         */
        public getLiteral() : string {
            return this.literal;
        }

        /**
         * Returns the literal value of the enumerator, which is its string representation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {string}
         */
        public toString() : string {
            return this.literal;
        }
        public name() : string { return this._$name; }
        public ordinal() : number { return this._$ordinal; }
    }
    MessageKind["__class"] = "uml.MessageKind";
    MessageKind["__interfaces"] = ["org.eclipse.emf.common.util.Enumerator","java.lang.Comparable","java.io.Serializable"];

    MessageKind["_$wrappers"] = [new MessageKind_$WRAPPER(0, "COMPLETE", 0, "complete", "complete"), new MessageKind_$WRAPPER(1, "LOST", 1, "lost", "lost"), new MessageKind_$WRAPPER(2, "FOUND", 2, "found", "found"), new MessageKind_$WRAPPER(3, "UNKNOWN", 3, "unknown", "unknown")];

}


uml.MessageKind_$WRAPPER.VALUES_$LI$();

uml.MessageKind_$WRAPPER.VALUES_ARRAY_$LI$();
