package core.database;

import java.io.IOException;

import org.mapdb.DataInput2;
import org.mapdb.DataOutput2;
import org.mapdb.Serializer;

public class FeatureBeanSerializer implements Serializer<FeatureBean>{
	
//	private final static FeatureBeanSerializer instance = new FeatureBeanSerializer();
//	
//	private FeatureBeanSerializer() {}
//	
//	public static FeatureBeanSerializer getInstance() {
//		return instance;
//	}
	
	@Override
	public void serialize(DataOutput2 out, FeatureBean value) throws IOException {
		out.writeUTF(value.getID());
		out.writeUTF(value.getFeatureName());		
	}

	@Override
	public FeatureBean deserialize(DataInput2 in, int available) throws IOException {
		String s1 = in.readUTF();
//		System.out.println("@@@" + s1);
		String s2 = in.readUTF();
//		System.out.println("###" + s2);
		return new FeatureBean(s1, s2);
	}
//	@Override
//	public void serialize(DataOutput2 out, FeatureBean value) throws IOException {
//		System.out.println("serialize");
//		byte[] bytes = ProtostuffUtil.serializer(value);
//		out.packInt(bytes.length);
//		System.out.println("length: " + bytes.length);
//		System.out.println("bytes1: " + new String(bytes));
//		out.write(bytes);
//	}
//	@Override
//	public FeatureBean deserialize(DataInput2 input, int available) throws IOException {
//		System.out.println("deserialize");
//		System.out.println("available: " + available);
//        int size = input.unpackInt();
//        System.out.println("size: " + size);
//		byte[] bytes = new byte[size];
//		input.readFully(bytes);
//		
//		System.out.println("bytes2: " + new String(bytes));
//		
//		FeatureBean feature = ProtostuffUtil.deserializer(bytes, FeatureBean.class);
//		return feature;
//	}
	
	

}
