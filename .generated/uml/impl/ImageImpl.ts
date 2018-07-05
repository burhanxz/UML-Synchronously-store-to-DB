/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Image</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ImageImpl#getContent}</li>
     * <li>{@link uml.impl.ImageImpl#getFormat}</li>
     * <li>{@link uml.impl.ImageImpl#getLocation}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ElementImpl
     * @class
     */
    export class ImageImpl extends uml.impl.ElementImpl implements uml.Image {
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
            return uml.UmlPackage.eINSTANCE.getImage();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {string}
         */
        public getContent() : string {
            return <string>this.eGet(uml.UmlPackage.eINSTANCE.getImage_Content(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} newContent
         */
        public setContent(newContent : string) {
            this.eSet(uml.UmlPackage.eINSTANCE.getImage_Content(), newContent);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public unsetContent() {
            this.eUnset(uml.UmlPackage.eINSTANCE.getImage_Content());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isSetContent() : boolean {
            return this.eIsSet(uml.UmlPackage.eINSTANCE.getImage_Content());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {string}
         */
        public getFormat() : string {
            return <string>this.eGet(uml.UmlPackage.eINSTANCE.getImage_Format(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} newFormat
         */
        public setFormat(newFormat : string) {
            this.eSet(uml.UmlPackage.eINSTANCE.getImage_Format(), newFormat);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public unsetFormat() {
            this.eUnset(uml.UmlPackage.eINSTANCE.getImage_Format());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isSetFormat() : boolean {
            return this.eIsSet(uml.UmlPackage.eINSTANCE.getImage_Format());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {string}
         */
        public getLocation() : string {
            return <string>this.eGet(uml.UmlPackage.eINSTANCE.getImage_Location(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} newLocation
         */
        public setLocation(newLocation : string) {
            this.eSet(uml.UmlPackage.eINSTANCE.getImage_Location(), newLocation);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public unsetLocation() {
            this.eUnset(uml.UmlPackage.eINSTANCE.getImage_Location());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isSetLocation() : boolean {
            return this.eIsSet(uml.UmlPackage.eINSTANCE.getImage_Location());
        }
    }
    ImageImpl["__class"] = "uml.impl.ImageImpl";
    ImageImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject","uml.Image"];


}

