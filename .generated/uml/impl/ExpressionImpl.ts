/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Expression</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ExpressionImpl#getOperand}</li>
     * <li>{@link uml.impl.ExpressionImpl#getSymbol}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ValueSpecificationImpl
     * @class
     */
    export class ExpressionImpl extends uml.impl.ValueSpecificationImpl implements uml.Expression {
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
            return uml.UmlPackage.eINSTANCE.getExpression();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOperand() : org.eclipse.emf.common.util.EList<uml.ValueSpecification> {
            return <org.eclipse.emf.common.util.EList<uml.ValueSpecification>><any>this.eGet(uml.UmlPackage.eINSTANCE.getExpression_Operand(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {string}
         */
        public getSymbol() : string {
            return <string>this.eGet(uml.UmlPackage.eINSTANCE.getExpression_Symbol(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} newSymbol
         */
        public setSymbol(newSymbol : string) {
            this.eSet(uml.UmlPackage.eINSTANCE.getExpression_Symbol(), newSymbol);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public unsetSymbol() {
            this.eUnset(uml.UmlPackage.eINSTANCE.getExpression_Symbol());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isSetSymbol() : boolean {
            return this.eIsSet(uml.UmlPackage.eINSTANCE.getExpression_Symbol());
        }
    }
    ExpressionImpl["__class"] = "uml.impl.ExpressionImpl";
    ExpressionImpl["__interfaces"] = ["ecore4m.EModelElement","uml.TypedElement","org.eclipse.emf.ecore.EObject","uml.Expression","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.ValueSpecification","uml.ParameterableElement","uml.PackageableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

