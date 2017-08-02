results = run_sql

describe :items do
   it "should return 10 items" do
    expect(results.count).to eq 10
   end
   
   it "should return names" do
     results.each do |result|
       expect(result[:name]).to eq find_record(:people, result[:id]).name
     end
   end
   
   it "should return sales count" do
    results.each do |result|
      sales = find_records_by_people_id(:sales, result[:id])
      expect(result[:sale_count]).to eq sales.count
    end
   end
   
   it "ranking should be in order" do
     last_highest = 1
     results.each do |result|
       expect(result[:sale_rank]).to be >= last_highest
       last_highest = result[:sale_rank]
     end
   end
end