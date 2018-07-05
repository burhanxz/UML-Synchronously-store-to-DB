/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Profile Application</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A profile application is used to show which profiles have been applied to a package.
     * <p>From package UML::Packages.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ProfileApplication#getAppliedProfile}</li>
     * <li>{@link uml.ProfileApplication#isIsStrict}</li>
     * <li>{@link uml.ProfileApplication#getApplyingPackage}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getProfileApplication()
     * @model
     * @generated
     * @class
     */
    export interface ProfileApplication extends uml.DirectedRelationship {
        /**
         * Returns the value of the '<em><b>Applied Profile</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References the Profiles that are applied to a Package through this ProfileApplication.
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Applied Profile</em>' reference.
         * @see #setAppliedProfile(Profile)
         * @see uml.UmlPackage#getProfileApplication_AppliedProfile()
         * @model required="true" ordered="false"
         * @generated
         */
        getAppliedProfile() : uml.Profile;

        /**
         * Sets the value of the '{@link uml.ProfileApplication#getAppliedProfile}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Applied Profile</em>' reference.
         * @see #getAppliedProfile()
         * @generated
         */
        setAppliedProfile(value : uml.Profile);

        /**
         * Returns the value of the '<em><b>Is Strict</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies that the Profile filtering rules for the metaclasses of the referenced metamodel shall be strictly applied.
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Strict</em>' attribute.
         * @see #setIsStrict(boolean)
         * @see uml.UmlPackage#getProfileApplication_IsStrict()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsStrict() : boolean;

        /**
         * Sets the value of the '{@link uml.ProfileApplication#isIsStrict}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Strict</em>' attribute.
         * @see #isIsStrict()
         * @generated
         */
        setIsStrict(value : boolean);

        /**
         * Returns the value of the '<em><b>Applying Package</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.Package#getProfileApplication}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The package that owns the profile application.
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Applying Package</em>' container reference.
         * @see #setApplyingPackage(uml.Package)
         * @see uml.UmlPackage#getProfileApplication_ApplyingPackage()
         * @see uml.Package#getProfileApplication
         * @model opposite="profileApplication" required="true" transient="false" ordered="false"
         * @generated
         */
        getApplyingPackage() : uml.Package;

        /**
         * Sets the value of the '{@link uml.ProfileApplication#getApplyingPackage}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Applying Package</em>' container reference.
         * @see #getApplyingPackage()
         * @generated
         */
        setApplyingPackage(value : uml.Package);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the definition (Ecore representation) of the specified named element in the profile associated with this profile application.
         * @param {*} namedElement The named element for which to retrieve the applied definition.
         * <!-- end-model-doc -->
         * @model ordered="false" namedElementRequired="true" namedElementOrdered="false"
         * @generated
         * @return {*}
         */
        getAppliedDefinition(namedElement? : any) : any;
    }
}

