/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace a.test {
    export class TestSysml {
        public static printMap() {
            console.info("------****------");
            let map : any = a.store.MyStore.INSTANCE_$LI$().getMap();
            let set : Array<any> = /* keySet */((m) => { let r=[]; if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) r.push(m.entries[i].key); return r; })(<any>map);
            for(let index122=0; index122 < set.length; index122++) {
                let key = set[index122];
                {
                    console.info(key.toString() + " --> " + /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>map, key));
                }
            }
        }

        public static main(args : string[]) {
            let m1 : uml.Model = <uml.Model><any>uml.UmlFactory.eINSTANCE.create(uml.UmlPackage.eINSTANCE.getModel());
            m1.setName("Two_tanks");
            let c1 : uml.Class = <uml.Class><any>uml.UmlFactory.eINSTANCE.create(uml.UmlPackage.eINSTANCE.getClass_());
            c1.setName("Design");
            let b1 : sysml.blocks.Block = <sysml.blocks.Block><any>sysml.blocks.BlocksFactory.eINSTANCE.create(sysml.blocks.BlocksPackage.Literals.BLOCK);
            b1.setBase_Class(c1);
            let c2 : uml.Class = <uml.Class><any>uml.UmlFactory.eINSTANCE.create(uml.UmlPackage.eINSTANCE.getClass_());
            c2.setName("Interface");
            let b2 : sysml.blocks.Block = <sysml.blocks.Block><any>sysml.blocks.BlocksFactory.eINSTANCE.create(sysml.blocks.BlocksPackage.Literals.BLOCK);
            b2.setBase_Class(c2);
            let p1 : uml.Property = <uml.Property><any>uml.UmlFactory.eINSTANCE.create(uml.UmlPackage.eINSTANCE.getProperty());
            p1.setName("act");
            let p2 : uml.Property = <uml.Property><any>uml.UmlFactory.eINSTANCE.create(uml.UmlPackage.eINSTANCE.getProperty());
            p2.setName("act2");
            m1.getPackagedElement().add(c1);
            m1.getPackagedElement().add(c2);
            c1.getNestedClassifier().add(c2);
            c2.getOwnedAttribute().add(p1);
            c2.getOwnedAttribute().add(p2);
            TestSysml.printMap();
        }
    }
    TestSysml["__class"] = "a.test.TestSysml";

}


a.test.TestSysml.main(null);
