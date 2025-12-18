import Card from "./Card";
import Table from "./Table";

export default function DashboardGrid() {
    return (
        <div className="grid">
            <Card title="Users"><Table /></Card>
            <Card title="My Products"><Table /></Card>
            <Card title="Documents"><Table /></Card>
            <Card title="To Do"><Table /></Card>
            <Card title="Assets"><Table /></Card>
            <Card title="HR"><Table /></Card>
            <Card title="Consultant"><Table /></Card>
            <Card title="Books" wide><Table /></Card>
        </div>
    );
}