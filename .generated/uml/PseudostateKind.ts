/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the literals of the enumeration '<em><b>Pseudostate Kind</b></em>',
     * and utility methods for working with them.
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * PseudostateKind is an Enumeration type that is used to differentiate various kinds of Pseudostates.
     * <p>From package UML::StateMachines.</p>
     * <!-- end-model-doc -->
     * @see uml.UmlPackage#getPseudostateKind()
     * @model
     * @generated
     * @enum
     * @property {uml.PseudostateKind} INITIAL
     * The '<em><b>Initial</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #INITIAL_VALUE
     * @generated
     * @ordered
     * @property {uml.PseudostateKind} DEEP_HISTORY
     * The '<em><b>Deep History</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #DEEP_HISTORY_VALUE
     * @generated
     * @ordered
     * @property {uml.PseudostateKind} SHALLOW_HISTORY
     * The '<em><b>Shallow History</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #SHALLOW_HISTORY_VALUE
     * @generated
     * @ordered
     * @property {uml.PseudostateKind} JOIN
     * The '<em><b>Join</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #JOIN_VALUE
     * @generated
     * @ordered
     * @property {uml.PseudostateKind} FORK
     * The '<em><b>Fork</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #FORK_VALUE
     * @generated
     * @ordered
     * @property {uml.PseudostateKind} JUNCTION
     * The '<em><b>Junction</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #JUNCTION_VALUE
     * @generated
     * @ordered
     * @property {uml.PseudostateKind} CHOICE
     * The '<em><b>Choice</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #CHOICE_VALUE
     * @generated
     * @ordered
     * @property {uml.PseudostateKind} ENTRY_POINT
     * The '<em><b>Entry Point</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #ENTRY_POINT_VALUE
     * @generated
     * @ordered
     * @property {uml.PseudostateKind} EXIT_POINT
     * The '<em><b>Exit Point</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #EXIT_POINT_VALUE
     * @generated
     * @ordered
     * @property {uml.PseudostateKind} TERMINATE
     * The '<em><b>Terminate</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #TERMINATE_VALUE
     * @generated
     * @ordered
     * @property {number} INITIAL_VALUE
     * The '<em><b>Initial</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * An initial pseudostate represents a default vertex that is the source for a single transition to the default state of a composite state. There can be at most one initial vertex in a region. The outgoing transition from the initial vertex may have a behavior, but not a trigger or guard.
     * <!-- end-model-doc -->
     * @see #INITIAL
     * @model name="initial"
     * @generated
     * @ordered
     * @property {number} DEEP_HISTORY_VALUE
     * The '<em><b>Deep History</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * DeepHistory represents the most recent active configuration of the composite state that directly contains this pseudostate; e.g. the state configuration that was active when the composite state was last exited. A composite state can have at most one deep history vertex. At most one transition may originate from the history connector to the default deep history state. This transition is taken in case the composite state had never been active before. Entry actions of states entered on the path to the state represented by a deep history are performed.
     * <!-- end-model-doc -->
     * @see #DEEP_HISTORY
     * @model name="deepHistory"
     * @generated
     * @ordered
     * @property {number} SHALLOW_HISTORY_VALUE
     * The '<em><b>Shallow History</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * ShallowHistory represents the most recent active substate of its containing state (but not the substates of that substate). A composite state can have at most one shallow history vertex. A transition coming into the shallow history vertex is equivalent to a transition coming into the most recent active substate of a state. At most one transition may originate from the history connector to the default shallow history state. This transition is taken in case the composite state had never been active before. Entry actions of states entered on the path to the state represented by a shallow history are performed.
     * <!-- end-model-doc -->
     * @see #SHALLOW_HISTORY
     * @model name="shallowHistory"
     * @generated
     * @ordered
     * @property {number} JOIN_VALUE
     * The '<em><b>Join</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Join vertices serve to merge several transitions emanating from source vertices in different orthogonal regions. The transitions entering a join vertex cannot have guards or triggers.
     * <!-- end-model-doc -->
     * @see #JOIN
     * @model name="join"
     * @generated
     * @ordered
     * @property {number} FORK_VALUE
     * The '<em><b>Fork</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Fork vertices serve to split an incoming transition into two or more transitions terminating on orthogonal target vertices (i.e. vertices in different regions of a composite state). The segments outgoing from a fork vertex must not have guards or triggers.
     * <!-- end-model-doc -->
     * @see #FORK
     * @model name="fork"
     * @generated
     * @ordered
     * @property {number} JUNCTION_VALUE
     * The '<em><b>Junction</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Junction vertices are semantic-free vertices that are used to chain together multiple transitions. They are used to construct compound transition paths between states. For example, a junction can be used to converge multiple incoming transitions into a single outgoing transition representing a shared transition path (this is known as an merge). Conversely, they can be used to split an incoming transition into multiple outgoing transition segments with different guard conditions. This realizes a static conditional branch. (In the latter case, outgoing transitions whose guard conditions evaluate to false are disabled. A predefined guard denoted 'else' may be defined for at most one outgoing transition. This transition is enabled if all the guards labeling the other transitions are false.) Static conditional branches are distinct from dynamic conditional branches that are realized by choice vertices (described below).
     * <!-- end-model-doc -->
     * @see #JUNCTION
     * @model name="junction"
     * @generated
     * @ordered
     * @property {number} CHOICE_VALUE
     * The '<em><b>Choice</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Choice vertices which, when reached, result in the dynamic evaluation of the guards of the triggers of its outgoing transitions. This realizes a dynamic conditional branch. It allows splitting of transitions into multiple outgoing paths such that the decision on which path to take may be a function of the results of prior actions performed in the same run-tocompletion step. If more than one of the guards evaluates to true, an arbitrary one is selected. If none of the guards evaluates to true, then the model is considered ill-formed. (To avoid this, it is recommended to define one outgoing transition with the predefined else guard for every choice vertex.) Choice vertices should be distinguished from static branch points that are based on junction points (described above).
     * <!-- end-model-doc -->
     * @see #CHOICE
     * @model name="choice"
     * @generated
     * @ordered
     * @property {number} ENTRY_POINT_VALUE
     * The '<em><b>Entry Point</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * An entry point pseudostate is an entry point of a state machine or composite state. In each region of the state machine or composite state it has a single transition to a vertex within the same region.
     * <!-- end-model-doc -->
     * @see #ENTRY_POINT
     * @model name="entryPoint"
     * @generated
     * @ordered
     * @property {number} EXIT_POINT_VALUE
     * The '<em><b>Exit Point</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * An exit point pseudostate is an exit point of a state machine or composite state. Entering an exit point within any region of the composite state or state machine referenced by a submachine state implies the exit of this composite state or submachine state and the triggering of the transition that has this exit point as source in the state machine enclosing the submachine or composite state.
     * <!-- end-model-doc -->
     * @see #EXIT_POINT
     * @model name="exitPoint"
     * @generated
     * @ordered
     * @property {number} TERMINATE_VALUE
     * The '<em><b>Terminate</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Entering a terminate pseudostate implies that the execution of this state machine by means of its context object is terminated. The state machine does not exit any states nor does it perform any exit actions other than those associated with the transition leading to the terminate pseudostate. Entering a terminate pseudostate is equivalent to invoking a DestroyObjectAction.
     * <!-- end-model-doc -->
     * @see #TERMINATE
     * @model name="terminate"
     * @generated
     * @ordered
     * @property {uml.PseudostateKind[]} VALUES
     * A public read-only list of all the '<em><b>Pseudostate Kind</b></em>' enumerators.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     */
    export enum PseudostateKind {
        
        /**
         * The '<em><b>Initial</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #INITIAL_VALUE
         * @generated
         * @ordered
         */
        INITIAL, 
        /**
         * The '<em><b>Deep History</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #DEEP_HISTORY_VALUE
         * @generated
         * @ordered
         */
        DEEP_HISTORY, 
        /**
         * The '<em><b>Shallow History</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #SHALLOW_HISTORY_VALUE
         * @generated
         * @ordered
         */
        SHALLOW_HISTORY, 
        /**
         * The '<em><b>Join</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #JOIN_VALUE
         * @generated
         * @ordered
         */
        JOIN, 
        /**
         * The '<em><b>Fork</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #FORK_VALUE
         * @generated
         * @ordered
         */
        FORK, 
        /**
         * The '<em><b>Junction</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #JUNCTION_VALUE
         * @generated
         * @ordered
         */
        JUNCTION, 
        /**
         * The '<em><b>Choice</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #CHOICE_VALUE
         * @generated
         * @ordered
         */
        CHOICE, 
        /**
         * The '<em><b>Entry Point</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #ENTRY_POINT_VALUE
         * @generated
         * @ordered
         */
        ENTRY_POINT, 
        /**
         * The '<em><b>Exit Point</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #EXIT_POINT_VALUE
         * @generated
         * @ordered
         */
        EXIT_POINT, 
        /**
         * The '<em><b>Terminate</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #TERMINATE_VALUE
         * @generated
         * @ordered
         */
        TERMINATE
    }

    /** @ignore */
    export class PseudostateKind_$WRAPPER implements org.eclipse.emf.common.util.Enumerator {
        /**
         * The '<em><b>Initial</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An initial pseudostate represents a default vertex that is the source for a single transition to the default state of a composite state. There can be at most one initial vertex in a region. The outgoing transition from the initial vertex may have a behavior, but not a trigger or guard.
         * <!-- end-model-doc -->
         * @see #INITIAL
         * @model name="initial"
         * @generated
         * @ordered
         */
        public static INITIAL_VALUE = 0;

        /**
         * The '<em><b>Deep History</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * DeepHistory represents the most recent active configuration of the composite state that directly contains this pseudostate; e.g. the state configuration that was active when the composite state was last exited. A composite state can have at most one deep history vertex. At most one transition may originate from the history connector to the default deep history state. This transition is taken in case the composite state had never been active before. Entry actions of states entered on the path to the state represented by a deep history are performed.
         * <!-- end-model-doc -->
         * @see #DEEP_HISTORY
         * @model name="deepHistory"
         * @generated
         * @ordered
         */
        public static DEEP_HISTORY_VALUE = 1;

        /**
         * The '<em><b>Shallow History</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * ShallowHistory represents the most recent active substate of its containing state (but not the substates of that substate). A composite state can have at most one shallow history vertex. A transition coming into the shallow history vertex is equivalent to a transition coming into the most recent active substate of a state. At most one transition may originate from the history connector to the default shallow history state. This transition is taken in case the composite state had never been active before. Entry actions of states entered on the path to the state represented by a shallow history are performed.
         * <!-- end-model-doc -->
         * @see #SHALLOW_HISTORY
         * @model name="shallowHistory"
         * @generated
         * @ordered
         */
        public static SHALLOW_HISTORY_VALUE = 2;

        /**
         * The '<em><b>Join</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Join vertices serve to merge several transitions emanating from source vertices in different orthogonal regions. The transitions entering a join vertex cannot have guards or triggers.
         * <!-- end-model-doc -->
         * @see #JOIN
         * @model name="join"
         * @generated
         * @ordered
         */
        public static JOIN_VALUE = 3;

        /**
         * The '<em><b>Fork</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Fork vertices serve to split an incoming transition into two or more transitions terminating on orthogonal target vertices (i.e. vertices in different regions of a composite state). The segments outgoing from a fork vertex must not have guards or triggers.
         * <!-- end-model-doc -->
         * @see #FORK
         * @model name="fork"
         * @generated
         * @ordered
         */
        public static FORK_VALUE = 4;

        /**
         * The '<em><b>Junction</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Junction vertices are semantic-free vertices that are used to chain together multiple transitions. They are used to construct compound transition paths between states. For example, a junction can be used to converge multiple incoming transitions into a single outgoing transition representing a shared transition path (this is known as an merge). Conversely, they can be used to split an incoming transition into multiple outgoing transition segments with different guard conditions. This realizes a static conditional branch. (In the latter case, outgoing transitions whose guard conditions evaluate to false are disabled. A predefined guard denoted 'else' may be defined for at most one outgoing transition. This transition is enabled if all the guards labeling the other transitions are false.) Static conditional branches are distinct from dynamic conditional branches that are realized by choice vertices (described below).
         * <!-- end-model-doc -->
         * @see #JUNCTION
         * @model name="junction"
         * @generated
         * @ordered
         */
        public static JUNCTION_VALUE = 5;

        /**
         * The '<em><b>Choice</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Choice vertices which, when reached, result in the dynamic evaluation of the guards of the triggers of its outgoing transitions. This realizes a dynamic conditional branch. It allows splitting of transitions into multiple outgoing paths such that the decision on which path to take may be a function of the results of prior actions performed in the same run-tocompletion step. If more than one of the guards evaluates to true, an arbitrary one is selected. If none of the guards evaluates to true, then the model is considered ill-formed. (To avoid this, it is recommended to define one outgoing transition with the predefined else guard for every choice vertex.) Choice vertices should be distinguished from static branch points that are based on junction points (described above).
         * <!-- end-model-doc -->
         * @see #CHOICE
         * @model name="choice"
         * @generated
         * @ordered
         */
        public static CHOICE_VALUE = 6;

        /**
         * The '<em><b>Entry Point</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An entry point pseudostate is an entry point of a state machine or composite state. In each region of the state machine or composite state it has a single transition to a vertex within the same region.
         * <!-- end-model-doc -->
         * @see #ENTRY_POINT
         * @model name="entryPoint"
         * @generated
         * @ordered
         */
        public static ENTRY_POINT_VALUE = 7;

        /**
         * The '<em><b>Exit Point</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An exit point pseudostate is an exit point of a state machine or composite state. Entering an exit point within any region of the composite state or state machine referenced by a submachine state implies the exit of this composite state or submachine state and the triggering of the transition that has this exit point as source in the state machine enclosing the submachine or composite state.
         * <!-- end-model-doc -->
         * @see #EXIT_POINT
         * @model name="exitPoint"
         * @generated
         * @ordered
         */
        public static EXIT_POINT_VALUE = 8;

        /**
         * The '<em><b>Terminate</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Entering a terminate pseudostate implies that the execution of this state machine by means of its context object is terminated. The state machine does not exit any states nor does it perform any exit actions other than those associated with the transition leading to the terminate pseudostate. Entering a terminate pseudostate is equivalent to invoking a DestroyObjectAction.
         * <!-- end-model-doc -->
         * @see #TERMINATE
         * @model name="terminate"
         * @generated
         * @ordered
         */
        public static TERMINATE_VALUE = 9;

        /**
         * An array of all the '<em><b>Pseudostate Kind</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static VALUES_ARRAY; public static VALUES_ARRAY_$LI$() : PseudostateKind[] { if(PseudostateKind_$WRAPPER.VALUES_ARRAY == null) PseudostateKind_$WRAPPER.VALUES_ARRAY = [PseudostateKind.INITIAL, PseudostateKind.DEEP_HISTORY, PseudostateKind.SHALLOW_HISTORY, PseudostateKind.JOIN, PseudostateKind.FORK, PseudostateKind.JUNCTION, PseudostateKind.CHOICE, PseudostateKind.ENTRY_POINT, PseudostateKind.EXIT_POINT, PseudostateKind.TERMINATE]; return PseudostateKind_$WRAPPER.VALUES_ARRAY; };

        /**
         * A public read-only list of all the '<em><b>Pseudostate Kind</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public static VALUES; public static VALUES_$LI$() : Array<PseudostateKind> { if(PseudostateKind_$WRAPPER.VALUES == null) PseudostateKind_$WRAPPER.VALUES = /* unmodifiableList *//* asList */PseudostateKind_$WRAPPER.VALUES_ARRAY_$LI$().slice(0).slice(0); return PseudostateKind_$WRAPPER.VALUES; };

        public static get$java_lang_String(literal) : PseudostateKind {
            for(let i = 0; i < PseudostateKind_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = PseudostateKind_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(uml.PseudostateKind["_$wrappers"][result].toString(),literal))) {
                    return result;
                }
            };
            return null;
        }

        /**
         * Returns the '<em><b>Pseudostate Kind</b></em>' literal with the specified literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} literal the literal.
         * @return {uml.PseudostateKind} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static get(literal?) : any {
            if(((typeof literal === 'string') || literal === null)) {
                return <any>uml.PseudostateKind_$WRAPPER.get$java_lang_String(literal);
            } else if(((typeof literal === 'number') || literal === null)) {
                return <any>uml.PseudostateKind_$WRAPPER.get$int(literal);
            } else throw new Error('invalid overload');
        }

        /**
         * Returns the '<em><b>Pseudostate Kind</b></em>' literal with the specified name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} name the name.
         * @return {uml.PseudostateKind} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static getByName(name) : PseudostateKind {
            for(let i = 0; i < PseudostateKind_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = PseudostateKind_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(uml.PseudostateKind["_$wrappers"][result].getName(),name))) {
                    return result;
                }
            };
            return null;
        }

        public static get$int(value) : PseudostateKind {
            switch((value)) {
            case 0 /* INITIAL_VALUE */:
                return PseudostateKind.INITIAL;
            case 1 /* DEEP_HISTORY_VALUE */:
                return PseudostateKind.DEEP_HISTORY;
            case 2 /* SHALLOW_HISTORY_VALUE */:
                return PseudostateKind.SHALLOW_HISTORY;
            case 3 /* JOIN_VALUE */:
                return PseudostateKind.JOIN;
            case 4 /* FORK_VALUE */:
                return PseudostateKind.FORK;
            case 5 /* JUNCTION_VALUE */:
                return PseudostateKind.JUNCTION;
            case 6 /* CHOICE_VALUE */:
                return PseudostateKind.CHOICE;
            case 7 /* ENTRY_POINT_VALUE */:
                return PseudostateKind.ENTRY_POINT;
            case 8 /* EXIT_POINT_VALUE */:
                return PseudostateKind.EXIT_POINT;
            case 9 /* TERMINATE_VALUE */:
                return PseudostateKind.TERMINATE;
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
    PseudostateKind["__class"] = "uml.PseudostateKind";
    PseudostateKind["__interfaces"] = ["org.eclipse.emf.common.util.Enumerator","java.lang.Comparable","java.io.Serializable"];

    PseudostateKind["_$wrappers"] = [new PseudostateKind_$WRAPPER(0, "INITIAL", 0, "initial", "initial"), new PseudostateKind_$WRAPPER(1, "DEEP_HISTORY", 1, "deepHistory", "deepHistory"), new PseudostateKind_$WRAPPER(2, "SHALLOW_HISTORY", 2, "shallowHistory", "shallowHistory"), new PseudostateKind_$WRAPPER(3, "JOIN", 3, "join", "join"), new PseudostateKind_$WRAPPER(4, "FORK", 4, "fork", "fork"), new PseudostateKind_$WRAPPER(5, "JUNCTION", 5, "junction", "junction"), new PseudostateKind_$WRAPPER(6, "CHOICE", 6, "choice", "choice"), new PseudostateKind_$WRAPPER(7, "ENTRY_POINT", 7, "entryPoint", "entryPoint"), new PseudostateKind_$WRAPPER(8, "EXIT_POINT", 8, "exitPoint", "exitPoint"), new PseudostateKind_$WRAPPER(9, "TERMINATE", 9, "terminate", "terminate")];

}


uml.PseudostateKind_$WRAPPER.VALUES_$LI$();

uml.PseudostateKind_$WRAPPER.VALUES_ARRAY_$LI$();
