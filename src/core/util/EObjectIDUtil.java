package core.util;

import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.ecore.resource.Resource;
import org.eclipse.emf.ecore.xmi.XMLResource;
//获取一个eobject的xmi:id，核心方法是XMLResource.getID(EObject)
public class EObjectIDUtil {
	public static String getID(EObject eo) {
		Resource resource = eo.eResource();
		if(resource instanceof XMLResource)
		{
			return ((XMLResource)resource).getID(eo);
		}
		else throw new RuntimeException("this eobject is not in a xmlresource!");
		
	}
}
