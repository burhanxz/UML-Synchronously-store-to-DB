/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Substitution</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.SubstitutionImpl#getContract}</li>
     * <li>{@link uml.impl.SubstitutionImpl#getSubstitutingClassifier}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.RealizationImpl
     * @class
     */
    export class SubstitutionImpl extends uml.impl.RealizationImpl implements uml.Substitution {
        constructor() {
            super();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        eStaticClass() : org.eclipse.emf.ecore.EClass {
            return uml.UmlPackage.eINSTANCE.getSubstitution();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getContract() : uml.Classifier {
            return <uml.Classifier><any>this.eGet(uml.UmlPackage.eINSTANCE.getSubstitution_Contract(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newContract
         */
        public setContract(newContract : uml.Classifier) {
            this.eSet(uml.UmlPackage.eINSTANCE.getSubstitution_Contract(), newContract);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSubstitutingClassifier() : uml.Classifier {
            return <uml.Classifier><any>this.eGet(uml.UmlPackage.eINSTANCE.getSubstitution_SubstitutingClassifier(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newSubstitutingClassifier
         */
        public setSubstitutingClassifier(newSubstitutingClassifier : uml.Classifier) {
            this.eSet(uml.UmlPackage.eINSTANCE.getSubstitution_SubstitutingClassifier(), newSubstitutingClassifier);
        }
    }
    SubstitutionImpl["__class"] = "uml.impl.SubstitutionImpl";
    SubstitutionImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EObject","uml.Substitution","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.Relationship","uml.ParameterableElement","uml.DirectedRelationship","uml.Dependency","uml.PackageableElement","uml.Realization","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject","uml.Abstraction"];


}

