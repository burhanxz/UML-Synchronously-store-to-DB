package core.test;

import java.util.Map;
import java.util.Set;

import core.store.MyStore;
import sysml.blocks.Block;
import sysml.blocks.BlocksFactory;
import sysml.blocks.BlocksPackage;
import uml.Model;
import uml.Property;
import uml.Type;
import uml.UmlFactory;
import uml.UmlPackage;

public class TestSysml {

	public static void printMap() {
		System.out.println("------****------");

		Map map = MyStore.INSTANCE.getMap();

		Set set = map.keySet();

		for (Object key : set) {
			System.out.println(key.toString() + " --> " + map.get(key));
		}
	}

	public static void main(String[] args) {

		printMap();
		Model m1 = (Model) UmlFactory.eINSTANCE.create(UmlPackage.eINSTANCE.getModel());
		m1.setName("Two_tanks");

		uml.Class c1 = (uml.Class) UmlFactory.eINSTANCE.create(UmlPackage.eINSTANCE.getClass_());
		c1.setName("Design");
		Block b1 = (Block) BlocksFactory.eINSTANCE.create(BlocksPackage.Literals.BLOCK);
		b1.setBase_Class(c1);

		uml.Class c2 = (uml.Class) UmlFactory.eINSTANCE.create(UmlPackage.eINSTANCE.getClass_());
		c2.setName("Interface");
		Block b2 = (Block) BlocksFactory.eINSTANCE.create(BlocksPackage.Literals.BLOCK);
		b2.setBase_Class(c2);

		uml.Property p1 = (Property) UmlFactory.eINSTANCE.create(UmlPackage.eINSTANCE.getProperty());
		p1.setName("act");
		printMap();
		uml.Property p2 = (Property) UmlFactory.eINSTANCE.create(UmlPackage.eINSTANCE.getProperty());
		p2.setName("act2");

		
		m1.getPackagedElement().add(c1);
		m1.getPackagedElement().add(c2);
		c1.getNestedClassifier().add(c2);
		c2.getOwnedAttribute().add(p1);
		c2.getOwnedAttribute().add(p2);
		
		printMap();
		
		// b1.setBase_Class(value);

	}

}
