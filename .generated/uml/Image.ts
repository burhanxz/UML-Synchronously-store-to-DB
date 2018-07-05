/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Image</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * Physical definition of a graphical image.
     * <p>From package UML::Packages.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Image#getContent}</li>
     * <li>{@link uml.Image#getFormat}</li>
     * <li>{@link uml.Image#getLocation}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getImage()
     * @model
     * @generated
     * @class
     */
    export interface Image extends uml.Element {
        /**
         * Returns the value of the '<em><b>Content</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * This contains the serialization of the image according to the format. The value could represent a bitmap, image such as a GIF file, or drawing 'instructions' using a standard such as Scalable Vector Graphic (SVG) (which is XML based).
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @return {string} the value of the '<em>Content</em>' attribute.
         * @see #isSetContent()
         * @see #unsetContent()
         * @see #setContent(String)
         * @see uml.UmlPackage#getImage_Content()
         * @model unsettable="true" dataType="types.String" ordered="false"
         * @generated
         */
        getContent() : string;

        /**
         * Sets the value of the '{@link uml.Image#getContent}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} value the new value of the '<em>Content</em>' attribute.
         * @see #isSetContent()
         * @see #unsetContent()
         * @see #getContent()
         * @generated
         */
        setContent(value : string);

        /**
         * Unsets the value of the '{@link uml.Image#getContent}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #isSetContent()
         * @see #getContent()
         * @see #setContent(String)
         * @generated
         */
        unsetContent();

        /**
         * Returns whether the value of the '{@link uml.Image#getContent}' attribute is set.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {boolean} whether the value of the '<em>Content</em>' attribute is set.
         * @see #unsetContent()
         * @see #getContent()
         * @see #setContent(String)
         * @generated
         */
        isSetContent() : boolean;

        /**
         * Returns the value of the '<em><b>Format</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * This indicates the format of the content, which is how the string content should be interpreted. The following values are reserved: SVG, GIF, PNG, JPG, WMF, EMF, BMP. In addition the prefix 'MIME: ' is also reserved. This option can be used as an alternative to express the reserved values above, for example "SVG" could instead be expressed as "MIME: image/svg+xml".
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @return {string} the value of the '<em>Format</em>' attribute.
         * @see #isSetFormat()
         * @see #unsetFormat()
         * @see #setFormat(String)
         * @see uml.UmlPackage#getImage_Format()
         * @model unsettable="true" dataType="types.String" ordered="false"
         * @generated
         */
        getFormat() : string;

        /**
         * Sets the value of the '{@link uml.Image#getFormat}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} value the new value of the '<em>Format</em>' attribute.
         * @see #isSetFormat()
         * @see #unsetFormat()
         * @see #getFormat()
         * @generated
         */
        setFormat(value : string);

        /**
         * Unsets the value of the '{@link uml.Image#getFormat}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #isSetFormat()
         * @see #getFormat()
         * @see #setFormat(String)
         * @generated
         */
        unsetFormat();

        /**
         * Returns whether the value of the '{@link uml.Image#getFormat}' attribute is set.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {boolean} whether the value of the '<em>Format</em>' attribute is set.
         * @see #unsetFormat()
         * @see #getFormat()
         * @see #setFormat(String)
         * @generated
         */
        isSetFormat() : boolean;

        /**
         * Returns the value of the '<em><b>Location</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * This contains a location that can be used by a tool to locate the image as an alternative to embedding it in the stereotype.
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @return {string} the value of the '<em>Location</em>' attribute.
         * @see #isSetLocation()
         * @see #unsetLocation()
         * @see #setLocation(String)
         * @see uml.UmlPackage#getImage_Location()
         * @model unsettable="true" dataType="types.String" ordered="false"
         * @generated
         */
        getLocation() : string;

        /**
         * Sets the value of the '{@link uml.Image#getLocation}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} value the new value of the '<em>Location</em>' attribute.
         * @see #isSetLocation()
         * @see #unsetLocation()
         * @see #getLocation()
         * @generated
         */
        setLocation(value : string);

        /**
         * Unsets the value of the '{@link uml.Image#getLocation}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #isSetLocation()
         * @see #getLocation()
         * @see #setLocation(String)
         * @generated
         */
        unsetLocation();

        /**
         * Returns whether the value of the '{@link uml.Image#getLocation}' attribute is set.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {boolean} whether the value of the '<em>Location</em>' attribute is set.
         * @see #unsetLocation()
         * @see #getLocation()
         * @see #setLocation(String)
         * @generated
         */
        isSetLocation() : boolean;
    }
}

